/**
 * WebXR Manager for NeonPlan 3D — AR/VR support
 * Standalone module, no existing code touched
 */

import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  RingGeometry,
  MeshBasicMaterial,
  Vector2,
  Vector3,
  Quaternion,
  DoubleSide,
} from "three";

export type XRMode = "none" | "ar" | "vr";

export interface XRManagerOptions {
  /** Reference to the existing renderer */
  renderer: WebGLRenderer;
  /** Reference to the existing scene */
  scene: Scene;
  /** Reference to the existing camera */
  camera: PerspectiveCamera;
  /** Reference to the host element (for DOM overlays) */
  host: HTMLElement;
  /** Optional floor height for AR placement (metres) */
  floorHeight?: number;
  /** Called when XR session starts */
  onSessionStart?: (mode: XRMode) => void;
  /** Called when XR session ends */
  onSessionEnd?: () => void;
  /** Called when AR hit test finds a plane */
  onHitTest?: (pose: XRHitPose) => void;
}

/** Simplified hit test result for AR placement */
export interface XRHitPose {
  position: Vector3;
  quaternion: Quaternion;
  distance: number;
}

/** XR button states for UI */
export interface XRButtonState {
  arSupported: boolean;
  vrSupported: boolean;
  arActive: boolean;
  vrActive: boolean;
}

/**
 * WebXR Manager — handles AR and VR sessions
 * Uses the existing Three.js renderer/scene/camera
 */
export class XRManager {
  private readonly renderer: WebGLRenderer;
  private readonly scene: Scene;
  private readonly camera: PerspectiveCamera;
  private readonly host: HTMLElement;
  private readonly floorHeight: number;

  private readonly onSessionStart: ((mode: XRMode) => void) | undefined;
  private readonly onSessionEnd: (() => void) | undefined;
  private readonly onHitTest: ((pose: XRHitPose) => void) | undefined;

  private xrSession: XRSession | null = null;
  private xrMode: XRMode = "none";
  private referenceSpace: XRReferenceSpace | null = null;
  private hitTestSource: XRHitTestSource | null = null;
  private transientHitTestSource: XRTransientInputHitTestSource | null = null;

  // AR placement indicator
  private placementIndicator: Group | null = null;

  // Animation frame ID for XR render loop
  private xrFrameId: number | null = null;

  // Original renderer settings (to restore on exit)
  private originalPixelRatio: number;
  private originalSize: { width: number; height: number };

  // Button element reference
  private button: HTMLButtonElement | null = null;

  constructor(options: XRManagerOptions) {
    this.renderer = options.renderer;
    this.scene = options.scene;
    this.camera = options.camera;
    this.host = options.host;
    this.floorHeight = options.floorHeight ?? 0;
    this.onSessionStart = options.onSessionStart;
    this.onSessionEnd = options.onSessionEnd;
    this.onHitTest = options.onHitTest;

    // Store original settings
    this.originalPixelRatio = this.renderer.getPixelRatio();
    const size = this.renderer.getSize(new Vector2());
    this.originalSize = { width: size.x, height: size.y };

    // Initialize renderer XR support
    this.renderer.xr.enabled = true;
  }

  /** Check if AR is supported on this device/browser */
  async isARSupported(): Promise<boolean> {
    if (!navigator.xr) return false;
    try {
      return await navigator.xr.isSessionSupported("immersive-ar");
    } catch {
      return false;
    }
  }

  /** Check if VR is supported on this device/browser */
  async isVRSupported(): Promise<boolean> {
    if (!navigator.xr) return false;
    try {
      return await navigator.xr.isSessionSupported("immersive-vr");
    } catch {
      return false;
    }
  }

  /** Get current button states for UI */
  async getButtonState(): Promise<XRButtonState> {
    const [arSupported, vrSupported] = await Promise.all([
      this.isARSupported(),
      this.isVRSupported(),
    ]);
    return {
      arSupported,
      vrSupported,
      arActive: this.xrMode === "ar",
      vrActive: this.xrMode === "vr",
    };
  }

  /** Start AR session */
  async startAR(): Promise<boolean> {
    if (this.xrSession) return false;
    if (!navigator.xr) {
      console.warn("WebXR not available");
      return false;
    }

    try {
      const session = await navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["local-floor", "hit-test"],
        optionalFeatures: ["dom-overlay", "light-estimation", "depth-sensing"],
        domOverlay: { root: this.host },
      });
      await this.setupSession(session, "ar");
      return true;
    } catch (e) {
      console.error("Failed to start AR session:", e);
      return false;
    }
  }

  /** Start VR session */
  async startVR(): Promise<boolean> {
    if (this.xrSession) return false;
    if (!navigator.xr) {
      console.warn("WebXR not available");
      return false;
    }

    try {
      const session = await navigator.xr.requestSession("immersive-vr", {
        requiredFeatures: ["local-floor"],
        optionalFeatures: ["hand-tracking", "eye-tracking", "layers"],
      });
      await this.setupSession(session, "vr");
      return true;
    } catch (e) {
      console.error("Failed to start VR session:", e);
      return false;
    }
  }

  /** End current XR session */
  async endSession(): Promise<void> {
    if (!this.xrSession) return;

    try {
      await this.xrSession.end();
    } catch (e) {
      console.error("Error ending XR session:", e);
    } finally {
      await this.cleanupSession();
    }
  }

  /** Toggle AR mode */
  async toggleAR(): Promise<void> {
    if (this.xrMode === "ar") {
      await this.endSession();
    } else {
      await this.endSession(); // End any existing session first
      await this.startAR();
    }
  }

  /** Toggle VR mode */
  async toggleVR(): Promise<void> {
    if (this.xrMode === "vr") {
      await this.endSession();
    } else {
      await this.endSession(); // End any existing session first
      await this.startVR();
    }
  }

  /** Get current XR mode */
  getMode(): XRMode {
    return this.xrMode;
  }

  /** Check if in XR session */
  isInSession(): boolean {
    return this.xrSession !== null;
  }

  /** Create a button element for AR/VR toggle */
  createButton(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.className = "fp3d-xr-button";
    btn.title = "AR/VR";
    btn.setAttribute("aria-label", "Enter AR/VR");
    btn.style.cssText = `
      position: absolute;
      right: 12px;
      bottom: 12px;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100;
      backdrop-filter: blur(8px);
      transition: background 0.2s, transform 0.1s;
    `;
    btn.innerHTML = this.getButtonIcon("none");
    btn.addEventListener("mouseenter", () => (btn.style.background = "rgba(0, 0, 0, 0.8)"));
    btn.addEventListener("mouseleave", () => (btn.style.background = "rgba(0, 0, 0, 0.6)"));
    btn.addEventListener("mousedown", () => (btn.style.transform = "scale(0.95)"));
    btn.addEventListener("mouseup", () => (btn.style.transform = "scale(1)"));
    btn.addEventListener("click", () => this.handleButtonClick());

    this.button = btn;
    this.updateButton();
    return btn;
  }

  /** Update button appearance based on state */
  private async updateButton(): Promise<void> {
    if (!this.button) return;
    const state = await this.getButtonState();

    if (this.xrMode === "ar") {
      this.button.innerHTML = this.getButtonIcon("ar");
      this.button.title = "Exit AR";
      this.button.style.background = "rgba(0, 150, 255, 0.8)";
    } else if (this.xrMode === "vr") {
      this.button.innerHTML = this.getButtonIcon("vr");
      this.button.title = "Exit VR";
      this.button.style.background = "rgba(150, 0, 255, 0.8)";
    } else if (state.arSupported || state.vrSupported) {
      this.button.innerHTML = this.getButtonIcon("none");
      this.button.title = state.arSupported ? "Enter AR" : "Enter VR";
      this.button.style.background = "rgba(0, 0, 0, 0.6)";
    } else {
      this.button.innerHTML = this.getButtonIcon("unsupported");
      this.button.title = "AR/VR not supported";
      this.button.style.background = "rgba(100, 100, 100, 0.6)";
      this.button.style.cursor = "not-allowed";
    }
  }

  private getButtonIcon(type: "none" | "ar" | "vr" | "unsupported"): string {
    switch (type) {
      case "ar":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>`;
      case "vr":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 12h12"/><path d="M12 8v8"/></svg>`;
      case "unsupported":
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`;
      default:
        return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M8 12l4 4 8-8"/><path d="M16 8a4 4 0 0 1-4 4"/></svg>`;
    }
  }

  private async handleButtonClick(): Promise<void> {
    if (this.xrMode === "ar") {
      await this.endSession();
    } else if (this.xrMode === "vr") {
      await this.endSession();
    } else {
      const state = await this.getButtonState();
      if (state.arSupported) {
        await this.startAR();
      } else if (state.vrSupported) {
        await this.startVR();
      }
    }
    await this.updateButton();
  }

  /** Internal: set up XR session */
  private async setupSession(session: XRSession, mode: XRMode): Promise<void> {
    this.xrSession = session;
    this.xrMode = mode;

    // Configure renderer for XR
    this.renderer.xr.setReferenceSpaceType(mode === "ar" ? "local-floor" : "local-floor");
    await this.renderer.xr.setSession(session);

    // Get reference space for hit test alignment
    this.referenceSpace = await session.requestReferenceSpace("local-floor");

    // Set up hit test for AR
    if (mode === "ar") {
      await this.setupHitTest(session);
      this.createPlacementIndicator();
    }

    // Event listeners
    session.addEventListener("end", this.onSessionEnded.bind(this));
    session.addEventListener("inputsourceschange", this.onInputSourcesChange.bind(this));

    // Start XR render loop
    this.startXRRenderLoop();

    this.onSessionStart?.(mode);
    await this.updateButton();
  }

  /** Set up hit testing for AR plane detection */
  private async setupHitTest(session: XRSession): Promise<void> {
    try {
      // Persistent hit test for stable placement
      const hitTestSource = await session.requestHitTestSource?.({
        space: this.referenceSpace!,
      });
      this.hitTestSource = hitTestSource ?? null;

      // Transient hit test for placement indicator
      const transientHitTestSource = await session.requestHitTestSourceForTransientInput?.({
        profile: "generic-touchscreen",
      });
      this.transientHitTestSource = transientHitTestSource ?? null;
    } catch (e) {
      console.warn("Hit test not available:", e);
    }
  }

  /** Create AR placement indicator (ring on detected plane) */
  private createPlacementIndicator(): void {
    const indicator = new Group();
    const ring = new Mesh(
      new RingGeometry(0.4, 0.5, 32),
      new MeshBasicMaterial({
        color: 0x0096ff,
        side: DoubleSide,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      })
    );
    ring.rotation.x = -Math.PI / 2;
    indicator.add(ring);

    // Add pulsing animation
    const pulse = new Mesh(
      new RingGeometry(0.5, 0.7, 32),
      new MeshBasicMaterial({
        color: 0x0096ff,
        side: DoubleSide,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
      })
    );
    pulse.rotation.x = -Math.PI / 2;
    indicator.add(pulse);

    indicator.userData.pulseRing = pulse;
    indicator.userData.pulseTime = 0;

    this.placementIndicator = indicator;
    this.scene.add(indicator);
  }

  /** Start the XR render loop */
  private startXRRenderLoop(): void {
    const render = (_timestamp: number, frame: XRFrame) => {
      if (!this.xrSession) return;

      this.xrFrameId = frame.session.requestAnimationFrame(render);

      // Update placement indicator for AR
      if (this.xrMode === "ar") {
        this.updatePlacementIndicator(frame);
      }

      // Render the frame
      this.renderer.render(this.scene, this.camera);
    };

    if (this.xrSession) {
      this.xrSession.requestAnimationFrame(render);
    }
  }

  /** Update AR placement indicator from hit test results */
  private updatePlacementIndicator(frame: XRFrame): void {
    if (!this.placementIndicator || !this.hitTestSource || !this.referenceSpace) return;

    const hitTestResults = frame.getHitTestResults(this.hitTestSource);
    if (hitTestResults.length === 0) {
      this.placementIndicator.visible = false;
      return;
    }

    const hit = hitTestResults[0];
    const pose = hit.getPose(this.referenceSpace);
    if (!pose) return;

    // Convert XR pose to Three.js
    const position = new Vector3(
      pose.transform.position.x,
      pose.transform.position.y + this.floorHeight,
      pose.transform.position.z
    );
    const quaternion = new Quaternion(
      pose.transform.orientation.x,
      pose.transform.orientation.y,
      pose.transform.orientation.z,
      pose.transform.orientation.w
    );

    this.placementIndicator.position.copy(position);
    this.placementIndicator.quaternion.copy(quaternion);
    this.placementIndicator.visible = true;

    // Pulse animation
    const pulseRing = this.placementIndicator.userData.pulseRing as Mesh;
    const pulseRingMaterial = pulseRing.material as MeshBasicMaterial;
    const pulseTime = (this.placementIndicator.userData.pulseTime += 0.05);
    pulseRing.scale.setScalar(1 + Math.sin(pulseTime) * 0.3);
    pulseRingMaterial.opacity = 0.4 * (1 + Math.sin(pulseTime)) / 2;

    // Notify hit test callback
    this.onHitTest?.({
      position,
      quaternion,
      distance: position.length(),
    });
  }

  /** Handle input sources change (controllers, hands) */
  private onInputSourcesChange(event: XRInputSourcesChangeEvent): void {
    // Handle controller connectivity
    for (const source of event.added) {
      if (source.gripSpace && this.xrMode === "vr") {
        // Could add controller visualization here
        console.log("XR input source added:", source.targetRayMode);
      }
    }
  }

  /** Session ended callback */
  private async onSessionEnded(): Promise<void> {
    await this.cleanupSession();
  }

  /** Clean up session resources */
  private async cleanupSession(): Promise<void> {
    // Stop render loop
    if (this.xrFrameId !== null && this.xrSession) {
      this.xrSession.cancelAnimationFrame(this.xrFrameId);
      this.xrFrameId = null;
    }

    // Clean up hit test sources
    this.hitTestSource?.cancel();
    this.hitTestSource = null;
    this.transientHitTestSource?.cancel();
    this.transientHitTestSource = null;

    // Remove placement indicator
    if (this.placementIndicator) {
      this.scene.remove(this.placementIndicator);
      this.placementIndicator = null;
    }

    // End XR session in renderer
    if (this.renderer.xr.isPresenting) {
      await this.renderer.xr.setSession(null);
    }

    // Restore renderer settings
    this.renderer.setPixelRatio(this.originalPixelRatio);
    this.renderer.setSize(this.originalSize.width, this.originalSize.height);

    // Clear state
    this.xrSession = null;
    this.xrMode = "none";
    this.referenceSpace = null;

    this.onSessionEnd?.();
    await this.updateButton();
  }

  /** Dispose all resources */
  dispose(): void {
    if (this.xrSession) {
      this.endSession();
    }
    this.renderer.xr.enabled = false;
    if (this.button && this.button.parentElement) {
      this.button.parentElement.removeChild(this.button);
    }
    this.button = null;
  }
}

/**
 * Create a floor plane at Y=0 for AR shadow catching
 * Call this after scene is built
 */
export function createARFloorPlane(radius: number = 20): Mesh {
  const geometry = new RingGeometry(0.1, radius, 64);
  const material = new MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.15,
    side: DoubleSide,
    depthWrite: false,
  });
  const mesh = new Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = -1; // Render first (shadow catcher)
  return mesh;
}

/**
 * Create a simple reticle for VR pointing
 */
export function createVRReticle(): Group {
  const group = new Group();
  const ring = new Mesh(
    new RingGeometry(0.02, 0.03, 32),
    new MeshBasicMaterial({
      color: 0xffffff,
      side: DoubleSide,
      transparent: true,
      opacity: 0.8,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  group.add(ring);
  group.visible = false;
  return group;
}