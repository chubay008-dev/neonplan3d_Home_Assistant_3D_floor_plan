/**
 * CAD-lite tools for NeonPlan 3D
 * Measures, sections, and analysis — no external CAD library needed
 */

import { Vector3, Group, Mesh, PlaneGeometry, MeshBasicMaterial, DoubleSide, Line, BufferGeometry as Geometry, Float32BufferAttribute, LineBasicMaterial } from "three";
import type { Building, Room, Opening } from "../model.ts";
// Re-export Opening as OpeningState for backward compatibility with tests
export type OpeningState = Opening;

// ============================================================
// 1. DISTANCE MEASUREMENT
// ============================================================

export interface MeasureResult {
  distance: number;
  from: [number, number];
  to: [number, number];
  label: string;
}

/** Distance between two 2D points (metres) */
export function measureDistance(from: [number, number], to: [number, number]): MeasureResult {
  const dx = to[0] - from[0];
  const dz = to[1] - from[1];
  const distance = Math.sqrt(dx * dx + dz * dz);

  let label: string;
  if (distance < 1) {
    label = `${(distance * 100).toFixed(0)} cm`;
  } else {
    label = `${distance.toFixed(2)} m`;
  }

  return { distance, from, to, label };
}

/** Distance between two 3D points (metres) */
export function measureDistance3D(a: Vector3, b: Vector3): number {
  return a.distanceTo(b);
}

// ============================================================
// 2. ROOM AREA CALCULATION
// ============================================================

export interface AreaResult {
  area: number;
  perimeter: number;
  label: string;
}

/** Calculate area of a polygon (Shoelace formula) */
export function calculateRoomArea(points: [number, number][]): AreaResult {
  if (points.length < 3) {
    return { area: 0, perimeter: 0, label: "0 m²" };
  }

  // Shoelace formula
  let area = 0;
  let perimeter = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += points[i][0] * points[j][1];
    area -= points[j][0] * points[i][1];

    const dx = points[j][0] - points[i][0];
    const dz = points[j][1] - points[i][1];
    perimeter += Math.sqrt(dx * dx + dz * dz);
  }

  area = Math.abs(area) / 2;

  let label: string;
  if (area < 1) {
    label = `${(area * 10000).toFixed(0)} cm²`;
  } else {
    label = `${area.toFixed(2)} m²`;
  }

  return { area, perimeter, label };
}

/** Calculate area for a Room object (handles holes via openings) */
export function calculateRoomAreaWithOpenings(room: Room, openings: Opening[]): AreaResult {
  const areaResult = calculateRoomArea(room.points);

  // Subtract opening areas (simplified — assumes rectangular openings)
  let openingArea = 0;
  for (const opening of openings) {
    if (opening.room_id === room.id) {
      // Estimate opening area (width * height)
      openingArea += opening.width * opening.height;
    }
  }

  const netArea = Math.max(0, areaResult.area - openingArea / 100); // Convert cm² to m²
  const netLabel = netArea < 1
    ? `${(netArea * 10000).toFixed(0)} cm²`
    : `${netArea.toFixed(2)} m²`;

  return { area: netArea, perimeter: areaResult.perimeter, label: netLabel };
}

// ============================================================
// 3. ROOM DIAGONAL (longest wall)
// ============================================================

export interface RoomDimensions {
  width: number;
  depth: number;
  diagonal: number;
  label: string;
}

/** Calculate room bounding box and diagonal */
export function calculateRoomDimensions(points: [number, number][]): RoomDimensions {
  if (points.length === 0) {
    return { width: 0, depth: 0, diagonal: 0, label: "0 × 0 m" };
  }

  let minX = Infinity, maxX = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  for (const [x, z] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
  }

  const width = maxX - minX;
  const depth = maxZ - minZ;
  const diagonal = Math.sqrt(width * width + depth * depth);

  const label = `${width.toFixed(2)} × ${depth.toFixed(2)} m`;

  return { width, depth, diagonal, label };
}

// ============================================================
// 4. SECTION VIEW (Cut Plane)
// ============================================================

export interface SectionPlane {
  x: number;       // X position of cut plane
  direction: "vertical" | "horizontal"; // Cut direction
  label: string;
}

/** Create a section plane at given X position */
export function createSectionPlane(x: number, direction: "vertical" | "horizontal" = "vertical"): SectionPlane {
  return {
    x,
    direction,
    label: direction === "vertical"
      ? `Mặt cắt đứng X=${x.toFixed(2)}m`
      : `Mặt cắt ngang Z=${x.toFixed(2)}m`,
  };
}

/** Get rooms visible in a section cut */
export function getRoomsInSection(
  rooms: Room[],
  section: SectionPlane,
  tolerance: number = 0.1
): Room[] {
  return rooms.filter((room) => {
    if (section.direction === "vertical") {
      // Room intersects the cut plane (vertical cut at X=section.x)
      return room.points.some(([x]) => Math.abs(x - section.x) < tolerance) ||
        room.points.some(([x]) => x >= section.x - tolerance && x <= section.x + tolerance) ||
        // Room straddles the cut plane
        (room.points.some(([x]) => x < section.x) && room.points.some(([x]) => x > section.x));
    } else {
      // Horizontal cut at Z=section.x
      return room.points.some(([, z]) => Math.abs(z - section.x) < tolerance) ||
        room.points.some(([, z]) => z >= section.x - tolerance && z <= section.x + tolerance) ||
        (room.points.some(([, z]) => z < section.x) && room.points.some(([, z]) => z > section.x));
    }
  });
}

/** Create 3D geometry for a section cut visualization */
export function createSectionGeometry(section: SectionPlane, height: number = 3): Group {
  const group = new Group();

  const planeGeo = new PlaneGeometry(20, height);
  const planeMat = new MeshBasicMaterial({
    color: 0xff4444,
    transparent: true,
    opacity: 0.15,
    side: DoubleSide,
    depthWrite: false,
  });
  const plane = new Mesh(planeGeo, planeMat);

  if (section.direction === "vertical") {
    plane.position.set(section.x, height / 2, 0);
    plane.rotation.y = 0;
  } else {
    plane.position.set(0, height / 2, section.x);
    plane.rotation.y = Math.PI / 2;
  }

  group.add(plane);

  // Add cut line (thick red line on floor)
  const lineGeo = new Geometry();
  const lineMat = new LineBasicMaterial({ color: 0xff4444, linewidth: 2 });

  if (section.direction === "vertical") {
    lineGeo.setAttribute("position", new Float32BufferAttribute([
      section.x, 0.01, -10,
      section.x, 0.01, 10,
    ], 3));
  } else {
    lineGeo.setAttribute("position", new Float32BufferAttribute([
      -10, 0.01, section.x,
      10, 0.01, section.x,
    ], 3));
  }

  const line = new Line(lineGeo, lineMat);
  group.add(line);

  return group;
}

// ============================================================
// 5. WALL LENGTH ANALYSIS
// ============================================================

export interface WallLength {
  wallId: string;
  length: number;
  label: string;
}

/** Calculate total wall length for a room */
export function calculateWallLengths(points: [number, number][]): WallLength[] {
  const walls: WallLength[] = [];
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const dx = points[j][0] - points[i][0];
    const dz = points[j][1] - points[i][1];
    const length = Math.sqrt(dx * dx + dz * dz);

    walls.push({
      wallId: `wall_${i}_${j}`,
      length,
      label: length < 1
        ? `${(length * 100).toFixed(0)} cm`
        : `${length.toFixed(2)} m`,
    });
  }

  return walls;
}

// ============================================================
// 6. BUILDING ANALYSIS SUMMARY
// ============================================================

export interface BuildingAnalysis {
  totalArea: number;
  totalPerimeter: number;
  roomCount: number;
  roomAreas: { roomId: string; roomName: string; area: number; label: string }[];
  totalWallLength: number;
  label: string;
}

/** Full building analysis */
export function analyzeBuilding(building: Building): BuildingAnalysis {
  let totalArea = 0;
  let totalPerimeter = 0;
  const roomAreas: BuildingAnalysis["roomAreas"] = [];
  let totalWallLength = 0;

  for (const floor of building.floors) {
    for (const room of floor.rooms) {
      const areaResult = calculateRoomArea(room.points);
      totalArea += areaResult.area;
      totalPerimeter += areaResult.perimeter;
      totalWallLength += areaResult.perimeter;

      roomAreas.push({
        roomId: room.id,
        roomName: room.name,
        area: areaResult.area,
        label: areaResult.label,
      });
    }
  }

  let label: string;
  if (totalArea < 100) {
    label = `${(totalArea * 10000).toFixed(0)} cm²`;
  } else {
    label = `${totalArea.toFixed(2)} m²`;
  }

  return {
    totalArea,
    totalPerimeter,
    roomCount: roomAreas.length,
    roomAreas,
    totalWallLength,
    label,
  };
}

// ============================================================
// 7. ROOM TILING (for CAD-lite layout suggestions)
// ============================================================

export interface TileSuggestion {
  roomId: string;
  tileWidth: number;  // in cm
  tileDepth: number;  // in cm
  count: number;
  layout: "parallel" | "diagonal" | "herringbone";
  label: string;
}

/** Suggest tile layout for a room */
export function suggestTileLayout(
  roomPoints: [number, number][],
  tileWidth: number = 30,  // 30cm tiles
  tileDepth: number = 30,
): TileSuggestion {
  const dims = calculateRoomDimensions(roomPoints);
  // area is calculated for potential future use in tile count adjustment

  // Simple parallel layout calculation
  const tilesAcross = Math.ceil(dims.width / (tileWidth / 100));
  const tilesDown = Math.ceil(dims.depth / (tileDepth / 100));
  const count = tilesAcross * tilesDown;

  return {
    roomId: "room",
    tileWidth,
    tileDepth,
    count,
    layout: "parallel",
    label: `${count} viên (${tileWidth}×${tileDepth}cm)`,
  };
}