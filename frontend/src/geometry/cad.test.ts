import assert from "node:assert/strict";
import { test } from "node:test";
import {
  measureDistance,
  measureDistance3D,
  calculateRoomArea,
  calculateRoomAreaWithOpenings,
  calculateRoomDimensions,
  createSectionPlane,
  getRoomsInSection,
  calculateWallLengths,
  analyzeBuilding,
  suggestTileLayout,
  type OpeningState,
} from "./cad.ts";
import type { Room, Building } from "../model.ts";
import { newFloor } from "../model.ts";

test("measureDistance returns correct distance and label", () => {
  const r = measureDistance([0, 0], [3, 4]);
  assert.equal(r.distance, 5);
  assert.equal(r.label, "5.00 m");
});

test("measureDistance uses cm for small distances", () => {
  const r = measureDistance([0, 0], [0.05, 0]);
  assert.equal(r.distance, 0.05);
  assert.ok(r.label.includes("cm"));
});

test("measureDistance3D works", () => {
  // Vector3 with distanceTo method (mimics three.js Vector3)
  const a = { x: 0, y: 0, z: 0, distanceTo: (b: { x: number; y: number; z: number }) => Math.sqrt(b.x ** 2 + b.y ** 2 + b.z ** 2) };
  const b = { x: 1, y: 0, z: 1, distanceTo: () => 0 };
  assert.equal(measureDistance3D(a as never, b as never), Math.sqrt(2));
});

test("calculateRoomArea rectangle", () => {
  const r = calculateRoomArea([[0, 0], [5, 0], [5, 4], [0, 4]]);
  assert.equal(r.area, 20);
  assert.ok(r.label.includes("m²"));
});

test("calculateRoomArea triangle", () => {
  const r = calculateRoomArea([[0, 0], [4, 0], [0, 3]]);
  assert.equal(r.area, 6);
});

test("calculateRoomArea empty", () => {
  const r = calculateRoomArea([]);
  assert.equal(r.area, 0);
  assert.equal(r.label, "0 m²");
});

test("calculateRoomDimensions", () => {
  const d = calculateRoomDimensions([[0, 0], [5, 0], [5, 3], [0, 3]]);
  assert.equal(d.width, 5);
  assert.equal(d.depth, 3);
  assert.ok(d.diagonal > 5);
});

test("createSectionPlane", () => {
  const s = createSectionPlane(2.5, "vertical");
  assert.equal(s.x, 2.5);
  assert.equal(s.direction, "vertical");
  assert.ok(s.label.includes("2.5"));
});

test("getRoomsInSection", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "r1", name: "Phòng khách", area_id: null, points: [[0, 0], [5, 0], [5, 3], [0, 3]], floor_material: "wood" },
    { id: "r2", name: "Phòng ngủ", area_id: null, points: [[6, 0], [10, 0], [10, 3], [6, 3]], floor_material: "wood" },
  ];
  const section = createSectionPlane(2.5, "vertical");
  const inSection = getRoomsInSection(floor.rooms, section);
  assert.ok(inSection.some((r) => r.id === "r1"));
});

test("calculateWallLengths", () => {
  const walls = calculateWallLengths([[0, 0], [5, 0], [5, 4], [0, 4]]);
  assert.equal(walls.length, 4);
  const bottomWall = walls.find((w) => w.wallId === "wall_0_1");
  assert.equal(bottomWall!.length, 5);
});

test("analyzeBuilding", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.rooms = [
    { id: "r1", name: "Phòng khách", area_id: null, points: [[0, 0], [5, 0], [5, 3], [0, 3]], floor_material: "wood" },
    { id: "r2", name: "Phòng ngủ", area_id: null, points: [[6, 0], [9, 0], [9, 3], [6, 3]], floor_material: "wood" },
  ];
  const building: Building = {
    version: 1,
    floors: [floor],
    settings: { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05, north: 0, roof: { type: "none", pitch: 35, overhang: 0.4 } },
    energy: { meter: null, grid: null, grid_invert: false, solar: null, battery: null, battery_invert: false, battery_soc: null, tariff: null },
    presence: [],
  };
  const a = analyzeBuilding(building);
  assert.equal(a.roomCount, 2);
  assert.ok(a.totalArea > 0);
  assert.equal(a.roomAreas.length, 2);
});

test("suggestTileLayout", () => {
  const t = suggestTileLayout([[0, 0], [5, 0], [5, 4], [0, 4]], 30, 30);
  assert.ok(t.count > 0);
  assert.equal(t.layout, "parallel");
  assert.ok(t.label.includes("viên"));
});

test("calculateRoomAreaWithOpenings", () => {
  const room: Room = { id: "r1", name: "Phòng khách", area_id: null, points: [[0, 0], [5, 0], [5, 3], [0, 3]], floor_material: "wood" };
  const openings: OpeningState[] = [{ id: "o1", room_id: "r1", edge: 0, offset: 1, width: 1, type: "door", sill: 0, height: 2.1, hinge: "left", leaves: 1, swing: "in", contact: null, contact2: null, sensor: null, sensor2: null, tilt2: null, position: null, position_inverted: false, mark: null, confirm: false, cover: null, tilt: null }];
  const r = calculateRoomAreaWithOpenings(room, openings);
  assert.ok(r.area >= 0);
});