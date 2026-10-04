/**
 * Multi-user collaboration for NeonPlan 3D
 * Enables multiple users to edit the same floorplan simultaneously
 *
 * Architecture:
 * - Uses WebSocket for real-time communication
 * - Operations are broadcasted as deltas
 * - Last-write-wins conflict resolution (can be upgraded to OT/CRDT)
 * - Presence indicators for user cursors and names
 */

// ============================================================
// Types
// ============================================================

export type CollabConnectionState =
  | "disconnected"
  | "connecting"
  | "connected"
  | "reconnecting"
  | "error";

export type CollabMessageType =
  | "handshake"
  | "join"
  | "leave"
  | "presence"
  | "delta"
  | "delta_ack"
  | "snapshot"
  | "sync_request"
  | "sync_response"
  | "pong"
  | "ping"
  | "error";

export interface CollabSession {
  /** Current connection state */
  readonly state: CollabConnectionState;
  /** Local user ID */
  readonly userId: string;
  /** Other users currently in the session */
  readonly peers: Map<string, CollabPeer>;
  /** Latest operation timestamp (version vector) */
  lastOperationId: number;

  /** Send a delta change to all peers */
  sendDelta(delta: OperationDelta): void;
  /** Leave the session */
  leave(): void;
  /** Close the connection */
  close(): void;
}

export interface CollabPeer {
  /** Peer's user ID */
  id: string;
  /** Peer's display name */
  name: string;
  /** Last activity timestamp */
  lastSeen: number;
  /** Peer's cursor position (in metres) */
  cursor?: [number, number];
  /** Selected furniture ID (for highlight) */
  selection?: string;
}

export interface OperationDelta {
  /** Operation ID (must be unique) */
  operationId: number;
  /** Path in building JSON (e.g., "building/floors/0/rooms/r1/points") */
  path: string;
  /** Operation type */
  op: "set" | "add" | "remove" | "move" | "delete";
  /** Old value (before the change) */
  oldValue: unknown;
  /** New value (after the change) */
  newValue: unknown;
  /** Local user who made the change */
  userId: string;
  /** Timestamp when change was made */
  timestamp: number;
}

export interface CollabClientOptions {
  /** WebSocket server URL */
  serverUrl: string;
  /** Room/session ID to join */
  roomId: string;
  /** Local user display name */
  userName?: string;
  /** Called when connected */
  onConnected?: () => void;
  /** Called when disconnected */
  onDisconnected?: () => void;
  /** Called when connection error */
  onError?: (error: string) => void;
  /** Called when a peer joins */
  onPeerJoin?: (peer: CollabPeer) => void;
  /** Called when a peer leaves */
  onPeerLeave?: (peer: CollabPeer) => void;
  /** Called when receiving a delta from a peer */
  onRemoteDelta?: (delta: OperationDelta) => void;
  /** Called when cursor changes on a peer */
  onPeerCursor?: (peerId: string, position: [number, number] | null) => void;
  /** Ping interval in seconds */
  pingInterval?: number;
}

export interface CollabClient extends CollabSession {
  /** Connect to the server */
  connect(): void;
  /** Set local cursor position */
  setCursor(position: [number, number] | null): void;
  /** Set local selection */
  setSelection(selection: string | undefined): void;
}

// ============================================================
// Implementation
// ============================================================

/** Generate a random user ID */
function generateUserId(): string {
  return "user_" + Math.random().toString(36).substr(2, 9);
}

/** Serialize a delta to a compact JSON string */
function serializeDelta(delta: OperationDelta): string {
  return JSON.stringify(delta);
}

/**
 * Create a collaborative editing session
 * Connects to a WebSocket server and synchronizes changes between peers
 *
 * @param options Configuration options
 * @returns A collab client instance
 */
export function createCollabClient(options: CollabClientOptions): CollabClient {
  const userId = generateUserId();
  const serverUrl = options.serverUrl.replace(/^http/i, "ws");

  let ws: WebSocket | null = null;
  let lastPingTime = 0;
  let lastPingInterval = options.pingInterval ?? 30;
  let lastOperationId = 0;
  const peers = new Map<string, CollabPeer>();
  let state: CollabConnectionState = "disconnected";

  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;
  let reconnectTimeout: ReturnType<typeof setTimeout> | null = null;

  // Cursor tracking
  let localCursor: [number, number] | null = null;
  let localSelection: string | undefined = undefined;

  /**
   * Build a presence message
   */
  function buildPresenceMessage(): string {
    const msg: CollabPresenceMessage = {
      type: "presence",
      userId,
      name: options.userName ?? "Người dùng",
      cursor: localCursor,
      selection: localSelection,
    };
    return JSON.stringify(msg);
  }

  /**
   * Send a message to the server
   */
  function sendMessage(data: string): void {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(data);
    }
  }

  /**
   * Update connection state
   */
  function setState(newState: CollabConnectionState): void {
    state = newState;
    if (newState === "connected") {
      reconnectAttempts = 0;
    }
    emitStateChange();
  }

  /**
   * Emit state change event
   */
  function emitStateChange(): void {
    // Note: this is a simple emit; in a real app you'd use a proper event system
    if (state === "connected" && options.onConnected) {
      options.onConnected();
    } else if (state === "disconnected" && options.onDisconnected) {
      options.onDisconnected();
    }
  }

  /**
   * Handle incoming messages from the server
   */
  function handleMessage(raw: string | ArrayBuffer | Blob): void {
    let json: string;
    if (typeof raw === "string") {
      json = raw;
    } else {
      throw new Error("Binary WebSocket messages not supported yet");
    }

    let msg: CollabMessage;
    try {
      msg = JSON.parse(json);
    } catch (e) {
      console.warn("Failed to parse collab message:", json);
      return;
    }

    switch (msg.type) {
      case "handshake":
        handleHandshake(msg);
        break;
      case "join":
        handleJoin(msg);
        break;
      case "leave":
        handleLeave(msg);
        break;
      case "presence":
        handlePresence(msg);
        break;
      case "delta":
        handleRemoteDelta(msg);
        break;
      case "delta_ack":
        handleDeltaAck(msg);
        break;
      case "snapshot":
        handleSnapshot(msg);
        break;
      case "ping":
        // Respond to ping immediately
        const pongMsg: CollabPongMessage = { type: "pong" };
        sendMessage(JSON.stringify(pongMsg));
        break;
      case "error":
        handleErrorMessage(msg);
        break;
      default:
        console.warn("Unknown message type:", msg.type);
    }
  }

  /**
   * Handle handshake message
   */
  function handleHandshake(_msg: CollabHandshakeMessage): void {
    // Server is ready, now join the room
    const joinMsg: CollabJoinMessage = {
      type: "join",
      userId,
      roomId: options.roomId,
      userName: options.userName ?? "Người dùng",
    };
    sendMessage(JSON.stringify(joinMsg));
    setState("connected");
  }

  /**
   * Handle join message (another peer joined)
   */
  function handleJoin(msg: CollabJoinMessage): void {
    const peer: CollabPeer = {
      id: msg.userId,
      name: msg.userName ?? "Người dùng",
      lastSeen: Date.now(),
    };
    peers.set(msg.userId, peer);
    if (options.onPeerJoin) {
      options.onPeerJoin(peer);
    }
  }

  /**
   * Handle leave message (peer left)
   */
  function handleLeave(msg: CollabLeaveMessage): void {
    const peer = peers.get(msg.userId);
    peers.delete(msg.userId);
    if (peer && options.onPeerLeave) {
      options.onPeerLeave(peer);
    }
  }

  /**
   * Handle presence message (cursor/selection update from peer)
   */
  function handlePresence(msg: CollabPresenceMessage): void {
    const peer = peers.get(msg.userId);
    if (peer) {
      peer.lastSeen = Date.now();
      if (msg.cursor) {
        peer.cursor = msg.cursor;
        if (options.onPeerCursor) {
          options.onPeerCursor(msg.userId, msg.cursor);
        }
      } else if (msg.cursor === null) {
        peer.cursor = undefined;
      }
      if (msg.selection !== undefined) {
        peer.selection = msg.selection ?? undefined;
      }
    }
  }

  /**
   * Handle a remote delta (someone else changed something)
   */
  function handleRemoteDelta(msg: CollabDeltaMessage): void {
    const delta: OperationDelta = {
      operationId: msg.operationId,
      path: msg.path,
      op: msg.op,
      oldValue: msg.oldValue,
      newValue: msg.newValue,
      userId: msg.userId,
      timestamp: msg.timestamp,
    };

    // Apply the delta locally
    if (options.onRemoteDelta) {
      options.onRemoteDelta(delta);
    }

    // Send acknowledgment
    const ackMsg: CollabDeltaAckMessage = {
      type: "delta_ack",
      operationId: msg.operationId,
      userId,
    };
    sendMessage(JSON.stringify(ackMsg));
  }

  /**
   * Handle delta acknowledgment
   */
  function handleDeltaAck(msg: CollabDeltaAckMessage): void {
    // Server acknowledged our delta
    if (msg.userId !== userId) {
      lastOperationId = msg.operationId;
    }
  }

  /** Check if message type is fatal error (type guard) */
  /**
   * Handle snapshot (initial sync from server)
   */
  function handleSnapshot(msg: CollabSnapshotMessage): void {
    // Full building snapshot received
    console.log("Received snapshot:", msg.building);
    if (options.onRemoteDelta) {
      const delta: OperationDelta = {
        operationId: msg.snapshotId,
        path: "building",
        op: "set",
        oldValue: null,
        newValue: msg.building,
        userId: "server",
        timestamp: Date.now(),
      };
      options.onRemoteDelta(delta);
    }
  }

  /**
   * Handle error message
   */
  function handleErrorMessage(msg: CollabErrorMessage): void {
    const errorMsg = msg.error ?? "Lỗi không xác định";
    if (options.onError) {
      options.onError(errorMsg);
    }
    console.error("Collab error:", errorMsg);
    if (msg.fatal) {
      close();
    }
  }

  /**
   * Send a delta change
   */
  function sendDelta(delta: OperationDelta): void {
    if (state !== "connected") return;

    // Increment operation ID
    lastOperationId++;
    const deltaWithId: OperationDelta = {
      ...delta,
      operationId: lastOperationId,
      userId,
      timestamp: Date.now(),
    };

    sendMessage(serializeDelta(deltaWithId));
  }

  /**
   * Connect to the server
   */
  function connect(): void {
    if (ws) {
      ws.close();
      ws = null;
    }

    setState("connecting");

    try {
      ws = new WebSocket(serverUrl);

      ws.binaryType = "arraybuffer";

      ws.onopen = () => {
        console.log("Collab connected to", serverUrl);
        lastPingTime = Date.now();
        startPingTimer();
        // Send handshake
        const handshakeMsg: CollabHandshakeMessage = {
          type: "handshake",
          userId,
          roomId: options.roomId,
        };
        sendMessage(JSON.stringify(handshakeMsg));
      };

      ws.onmessage = (event) => {
        handleMessage(event.data);
        lastPingTime = Date.now();
      };

      ws.onerror = (event) => {
        console.error("Collab connection error:", event);
        setState("error");
        if (options.onError) {
          options.onError("Lỗi kết nối WebSocket");
        }
      };

      ws.onclose = (event) => {
        console.log("Collab disconnected:", event.code, event.reason);
        if (reconnectAttempts < maxReconnectAttempts) {
          reconnectAttempts++;
          setState("reconnecting");
          const delay = Math.min(1000 * reconnectAttempts * 2, 30000); // Exponential backoff
          reconnectTimeout = setTimeout(connect, delay);
        } else {
          setState("disconnected");
          if (options.onDisconnected) {
            options.onDisconnected();
          }
        }
      };
    } catch (e) {
      console.error("Failed to create WebSocket:", e);
      setState("error");
      if (options.onError) {
        options.onError("Không thể tạo kết nối");
      }
    }
  }

  /**
   * Start the ping timer
   */
  let pingTimerId: ReturnType<typeof setInterval> | null = null;

  function startPingTimer(): void {
    pingTimerId = setInterval(() => {
      const now = Date.now();
      if (now - lastPingTime > (lastPingInterval * 1000) * 1.5) {
        console.warn("Collab connection seems stale, reconnecting...");
        close();
        return;
      }
      // Send ping
      const pingMsg: CollabPingMessage = {
        type: "ping",
        userId,
        timestamp: now,
      };
      sendMessage(JSON.stringify(pingMsg));
    }, lastPingInterval * 1000);
  }

  /**
   * Set local cursor position
   */
  function setCursor(position: [number, number] | null): void {
    localCursor = position;
    if (state === "connected") {
      sendMessage(buildPresenceMessage());
    }
  }

  /**
   * Set local selection
   */
  function setSelection(selection: string | undefined): void {
    localSelection = selection;
    if (state === "connected") {
      sendMessage(buildPresenceMessage());
    }
  }

  /**
   * Leave the session
   */
  function leave(): void {
    const leaveMsg: CollabLeaveMessage = {
      type: "leave",
      userId,
      roomId: options.roomId,
    };
    sendMessage(JSON.stringify(leaveMsg));
  }

  /**
   * Close the connection
   */
  function close(): void {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout);
      reconnectTimeout = null;
    }
    leave();
    if (ws) {
      ws.close(1000, "Đã tắt");
      ws = null;
    }
    if (pingTimerId) {
      clearInterval(pingTimerId);
      pingTimerId = null;
    }
    setState("disconnected");
  }

  // Public interface
  return Object.freeze({
    get state() { return state; },
    get userId() { return userId; },
    get peers() { return peers; },
    get lastOperationId() { return lastOperationId; },
    connect,
    sendDelta,
    setCursor,
    setSelection,
    leave,
    close,
  });
}

// ============================================================
// Message Types
// ============================================================

export interface CollabBaseMessage {
  type: CollabMessageType;
}

export interface CollabHandshakeMessage extends CollabBaseMessage {
  type: "handshake";
  userId: string;
  roomId: string;
}

export interface CollabJoinMessage extends CollabBaseMessage {
  type: "join";
  userId: string;
  roomId: string;
  userName: string;
}

export interface CollabLeaveMessage extends CollabBaseMessage {
  type: "leave";
  userId: string;
  roomId: string;
}

export interface CollabPresenceMessage extends CollabBaseMessage {
  type: "presence";
  userId: string;
  name: string;
  cursor?: [number, number] | null;
  selection?: string | undefined;
}

export interface CollabDeltaMessage extends CollabBaseMessage {
  type: "delta";
  operationId: number;
  path: string;
  op: "set" | "add" | "remove" | "move" | "delete";
  oldValue: unknown;
  newValue: unknown;
  userId: string;
  timestamp: number;
}

export interface CollabDeltaAckMessage extends CollabBaseMessage {
  type: "delta_ack";
  operationId: number;
  userId: string;
}

export interface CollabSnapshotMessage extends CollabBaseMessage {
  type: "snapshot";
  snapshotId: number;
  building: unknown;
}

export interface CollabPingMessage extends CollabBaseMessage {
  type: "ping";
  userId: string;
  timestamp: number;
}

export interface CollabPongMessage extends CollabBaseMessage {
  type: "pong";
}

export interface CollabErrorMessage extends CollabBaseMessage {
  type: "error";
  error: string;
  fatal?: boolean;
}

export type CollabMessage =
  | CollabHandshakeMessage
  | CollabJoinMessage
  | CollabLeaveMessage
  | CollabPresenceMessage
  | CollabDeltaMessage
  | CollabDeltaAckMessage
  | CollabSnapshotMessage
  | CollabPingMessage
  | CollabPongMessage
  | CollabErrorMessage;


// ============================================================
// Helper Functions
// ============================================================

/**
 * Generate a demo delta for testing
 */
export function generateDemoDelta(): OperationDelta {
  return {
    operationId: 1,
    path: "building/floors/0/rooms/r1/points",
    op: "set",
    oldValue: [[0, 0], [5, 0]],
    newValue: [[0, 0], [5, 0], [5, 4], [0, 4]],
    userId: "user_demo",
    timestamp: Date.now(),
  };
}

/**
 * Simulate a remote peer changing a room
 * (Useful for testing delta handling)
 */
export function simulateRemoteChange(
  delta: OperationDelta,
  callback: (d: OperationDelta) => void
): void {
  // Simulate network delay
  setTimeout(() => {
    callback({
      ...delta,
      operationId: delta.operationId + 1,
      timestamp: Date.now(),
    });
  }, 100);
}