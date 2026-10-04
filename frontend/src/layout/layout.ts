/**
 * AI-assisted layout suggestions for NeonPlan 3D
 * Provides smart furniture placement, tiling, and room optimization
 */

import type { Room, Furniture, RoomClimate, Opening } from "../model.ts";
import { calculateRoomArea, calculateRoomDimensions, suggestTileLayout } from "../geometry/cad.ts";

/** Suggested furniture placement */
export interface FurnitureSuggestion {
  /** Type of furniture (e.g., "sofa", "bed", "table") */
  type: string;
  /** Suggested position (x, z in metres) */
  position: [number, number];
  /** Rotation in degrees (0-360) */
  rotation: number;
  /** Reason for suggestion */
  reason: string;
  /** Confidence 0-1 */
  confidence: number;
}

/** Room layout suggestion */
export interface LayoutSuggestion {
  /** Room ID */
  roomId: string;
  /** Suggested furniture placements */
  furniture: FurnitureSuggestion[];
  /** Tiling suggestions */
  tiles: {
    /** Tile dimensions in cm */
    width: number;
    depth: number;
    /** Number of tiles needed */
    count: number;
    /** Layout pattern */
    pattern: "grid" | "brick" | "diagonal";
    /** Label for UI */
    label: string;
  };
  /** Traffic flow suggestions */
  trafficFlow: {
    /** Main pathways (array of points) */
    pathways: [number, number][][];
    /** Door clearance (metres) */
    doorClearance: number;
  };
  /** Overall room score (0-100) */
  score: number;
  /** Explanation in Vietnamese */
  explanation: string;
}

/** Climate control optimization */
export interface ClimateOptimization {
  /** Suggested AC/heater placement */
  appliancePosition: [number, number];
  /** Optimal temperature setting */
  temperature: number;
  /** Airflow direction */
  airflow: "horizontal" | "vertical" | "circular";
  /** Explanation */
  explanation: string;
}

/**
 * Suggest furniture placement based on room characteristics
 * Uses rule-based AI (can be extended with ML models)
 */
export function suggestFurniturePlacement(
  room: Room,
  furnitureTypes: string[],
  openings: Opening[] = [],
  climate: RoomClimate | null = null
): LayoutSuggestion {
  const areaInfo = calculateRoomArea(room.points);

  // Normalize room orientation (assume door on wall 0 for simplicity)
  const doorEdge = openings.find((o) => o.room_id === room.id && o.type === "door")?.edge ?? 0;
  void doorEdge; // currently unused but kept for future expansion

  void climate; // keep for API compatibility but currently unused

  const suggestions: FurnitureSuggestion[] = [];

  // Define furniture types and their typical sizes (width, depth in metres)
  const furnitureSpecs: Record<string, { w: number; d: number; priority: number }> = {
    sofa: { w: 2.0, d: 0.9, priority: 10 },
    bed: { w: 1.8, d: 2.0, priority: 9 },
    dining_table: { w: 1.8, d: 0.9, priority: 8 },
    tv_stand: { w: 1.5, d: 0.4, priority: 7 },
    wardrobe: { w: 0.6, d: 0.6, priority: 6 },
    desk: { w: 1.2, d: 0.6, priority: 5 },
    bookshelf: { w: 0.8, d: 0.3, priority: 4 },
    nightstand: { w: 0.5, d: 0.4, priority: 3 },
    coffee_table: { w: 1.0, d: 0.5, priority: 2 },
    lamp: { w: 0.3, d: 0.3, priority: 1 },
  };

  // Filter to requested types
  const specs = Object.entries(furnitureSpecs)
    .filter(([type]) => furnitureTypes.includes(type))
    .map(([type, spec]) => ({ type, ...spec }));

  // Sort by priority (high first)
  specs.sort((a, b) => b.priority - a.priority);

  // Simple placement algorithm: place along walls, avoiding doors/windows
  const placed: { x: number; z: number; w: number; d: number }[] = [];

  // Try to place each furniture item
  for (const { type, w: furnW, d: furnD } of specs) {
    let placedSuccessfully = false;

    // Try placing against each wall
    for (let wall = 0; wall < 4; wall++) {
      if (placedSuccessfully) break;

      // Get wall points
      const p1 = room.points[wall];
      const p2 = room.points[(wall + 1) % room.points.length];

      // Wall vector
      const wallDx = p2[0] - p1[0];
      const wallDz = p2[1] - p1[1];
      const wallLen = Math.sqrt(wallDx * wallDx + wallDz * wallDz);

      if (wallLen < 0.1) continue; // Skip zero-length walls

      // Normalize wall vector
      const nx = wallDx / wallLen;
      const nz = wallDz / wallLen;

      // Try positions along the wall
      for (let offset = 0.3; offset < wallLen - furnW - 0.3; offset += 0.3) {
        // Calculate position
        const baseX = p1[0] + nx * offset;
        const baseZ = p1[1] + nz * offset;

        // Check if position is valid (not overlapping with existing furniture)
        const overlap = placed.some(existing => {
          // Simple AABB check
          return Math.abs(existing.x - baseX) < (existing.w + furnW) / 2 &&
                 Math.abs(existing.z - baseZ) < (existing.d + furnD) / 2;
        });

        if (!overlap) {
          // Check distance from doors/windows (minimum 0.3m clearance)
          const tooCloseToOpening = openings.some(op => {
            if (op.room_id !== room.id) return false;
            // Simplified: check if furniture is too close to opening
            const opPoint = room.points[op.edge];
            const dist = Math.sqrt(
              (baseX - opPoint[0]) ** 2 + (baseZ - opPoint[1]) ** 2
            );
            return dist < 0.3;
          });

          if (!tooCloseToOpening) {
            // Determine rotation (face into room)
            const wallAngle = Math.atan2(nz, nx) * 180 / Math.PI;
            // Rotate 90 degrees to face into room (assuming walls go clockwise)
            const rotation = (wallAngle + 90) % 360;

            suggestions.push({
              type,
              position: [baseX, baseZ],
              rotation,
              reason: `Đặt ${type} gần tường ${wall + 1}`,
              confidence: 0.7 + Math.random() * 0.2, // 0.7-0.9
            });

            placed.push({ x: baseX, z: baseZ, w: furnW, d: furnD });
            placedSuccessfully = true;
            break;
          }
        }
      }
    }

    // If couldn't place against wall, try center (for coffee tables, etc.)
    if (!placedSuccessfully && type === "coffee_table") {
      const centerX = (room.points.reduce((sum, p) => sum + p[0], 0) / room.points.length);
      const centerZ = (room.points.reduce((sum, p) => sum + p[1], 0) / room.points.length);

      const overlap = placed.some(existing => {
        return Math.abs(existing.x - centerX) < (existing.w + furnW) / 2 &&
               Math.abs(existing.z - centerZ) < (existing.d + furnD) / 2;
      });

      if (!overlap) {
        suggestions.push({
          type,
          position: [centerX, centerZ],
          rotation: 0,
          reason: `Đặt ${type} ở giữa phòng`,
          confidence: 0.6,
        });

        placed.push({ x: centerX, z: centerZ, w: furnW, d: furnD });
      }
    }
  }

  // Generate tiling suggestion
  const tileSuggestion = suggestTileLayout(room.points, 30, 30);

  // Generate traffic flow (simple: connect door to room center)
  const trafficFlow: LayoutSuggestion["trafficFlow"] = {
    pathways: [],
    doorClearance: 0.8,
  };

  if (openings.some(o => o.room_id === room.id && o.type === "door")) {
    const doorOp = openings.find(o => o.room_id === room.id && o.type === "door")!;
    const doorPoint = room.points[doorOp.edge];
    const centerX = room.points.reduce((sum, p) => sum + p[0], 0) / room.points.length;
    const centerZ = room.points.reduce((sum, p) => sum + p[1], 0) / room.points.length;

    trafficFlow.pathways = [[[doorPoint[0], doorPoint[1]], [centerX, centerZ]]];
  }

  // Calculate overall score based on furniture placement quality
  const score = Math.min(100, 50 + suggestions.length * 10 + (areaInfo.area > 20 ? 20 : 0));

  // Generate explanation in Vietnamese
  let explanation = `Phòng ${room.name} có diện tích ${areaInfo.label}. `;
  if (suggestions.length > 0) {
    explanation += `Đề xuất đặt ${suggestions.length} món đồ nội thất. `;
  } else {
    explanation += "Phòng quá nhỏ để gợi ý đồ nội thất. ";
  }
  explanation += `Gợiיון dùng ${tileSuggestion.label} gạch. `;
  if (trafficFlow.pathways.length > 0) {
    explanation += "Đề xuất đường đi chính từ cửa vào giữa phòng. ";
  }

  return {
    roomId: room.id,
    furniture: suggestions,
    tiles: {
      width: tileSuggestion.tileWidth,
      depth: tileSuggestion.tileDepth,
      count: tileSuggestion.count,
      pattern: "grid",
      label: tileSuggestion.label,
    },
    trafficFlow: trafficFlow,
    score: score,
    explanation: explanation,
  };
}

/**
 * Optimize climate control placement
 */
export function suggestClimatePlacement(
  room: Room,
  climate: RoomClimate | null
): ClimateOptimization | null {
  if (!climate) return null;

  const centerX = (room.points.reduce((sum, p) => sum + p[0], 0) / room.points.length);
  const centerZ = (room.points.reduce((sum, p) => sum + p[1], 0) / room.points.length);

  // Suggest placing AC/heater near ceiling, opposite of door if possible
  let applianceX = centerX;
  let applianceZ = centerZ;

  // Simple: place in corner opposite to likely door position
  // (assuming door is on first wall for simplicity)
  if (room.points.length >= 4) {
    // Try to place in corner far from wall 0
    const farCornerIdx = Math.floor(room.points.length / 2);
    const farCorner = room.points[farCornerIdx];
    applianceX = farCorner[0];
    applianceZ = farCorner[1];
  }

  // Suggest temperature based on season (simplified)
  const suggestedTemp = 24; // Comfortable temperature

  return {
    appliancePosition: [applianceX, applianceZ],
    temperature: suggestedTemp,
    airflow: "horizontal",
    explanation: `Đặt máy lạnh ở góc phòng để phân tán khí równomірnely. Nhiệt độ đề xuất: ${suggestedTemp}°C.`,
  };
}

/**
 * Check if furniture fits in room considering openings
 */
export function checkFurnitureFit(
  furniture: Furniture,
  room: Room,
  openings: Opening[] = []
): boolean {
  // Simple AABB check against room bounds
  const roomInfo = calculateRoomDimensions(room.points);

  // Check if furniture exceeds room dimensions
  if (furniture.w > roomInfo.width || furniture.d > roomInfo.depth) {
    return false;
  }

  for (const opening of openings) {
    if (opening.room_id !== room.id) continue;

    // Get wall points for this opening's edge
    const wallStart = room.points[opening.edge];
    const wallEnd = room.points[(opening.edge + 1) % room.points.length];

    // Simplified: assume opening is centered on wall
    const wallMidX = (wallStart[0] + wallEnd[0]) / 2;
    const wallMidZ = (wallStart[1] + wallEnd[1]) / 2;

    // Check if furniture is too close to this wall (within opening width)
    // Simplified: calculate distance from furniture to opening centerline
    const dx = furniture.x - wallMidX;
    const dz = furniture.z - wallMidZ;
    const distToWall = Math.abs(dx * (wallEnd[0] - wallStart[0]) + dz * (wallEnd[1] - wallStart[1])) / Math.sqrt(
      Math.pow(wallEnd[0] - wallStart[0], 2) +
      Math.pow(wallEnd[1] - wallStart[1], 2)
    );

    // If furniture overlaps with opening space, it doesn't fit
    if (distToWall < opening.width / 2 + 0.1) { // 0.1m buffer
      return false;
    }
  }

  return true;
}

/**
 * Generate multiple layout options and return the best
 */
export function generateLayoutOptions(
  room: Room,
  furnitureTypes: string[],
  openings: Opening[] = [],
  climate: RoomClimate | null = null
): LayoutSuggestion[] {
  const options: LayoutSuggestion[] = [];

  // Option 1: Standard placement
  const option1 = suggestFurniturePlacement(room, furnitureTypes, openings, climate);
  options.push(option1);

  // Option 2: Try different furniture priority (if we have many types)
  if (furnitureTypes.length > 3) {
    const shuffled = [...furnitureTypes].sort(() => Math.random() - 0.5);
    const option2 = suggestFurniturePlacement(room, shuffled.slice(0, 3), openings, climate);
    if (option2.furniture.length > 0) {
      options.push(option2);
    }
  }

  // Sort by score descending
  options.sort((a, b) => b.score - a.score);

  return options;
}