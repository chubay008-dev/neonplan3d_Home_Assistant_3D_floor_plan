import assert from "node:assert/strict";
import { test } from "node:test";
import { suggestClimatePlacement, checkFurnitureFit, generateLayoutOptions } from "./layout.ts";
import type { Room, Furniture } from "../model.ts";

const sampleRoom: Room = {
  id: "r1",
  name: "Phòng ngủ",
  area_id: null,
  points: [[0, 0], [5, 0], [5, 4], [0, 4]],
  floor_material: "wood",
};

test("suggestClimatePlacement returns valid suggestion", () => {
  const climate = suggestClimatePlacement(sampleRoom, { temperature: "sensor.temp_1", humidity: "sensor.hum_1" });

  if (climate) {
    assert.ok(climate.temperature >= 18 && climate.temperature <= 28, "Temperature should be comfortable range");
    assert.ok(climate.appliancePosition[0] >= 0, "X position should be valid");
    assert.ok(climate.appliancePosition[1] >= 0, "Z position should be valid");
  }
});

test("suggestClimatePlacement returns null for null climate", () => {
  const result = suggestClimatePlacement(sampleRoom, null);
  assert.equal(result, null);
});

test("checkFurnitureFit works correctly", () => {
  const smallFurniture: Furniture = {
    id: "sofa1",
    type: "sofa",
    x: 2.5,
   z: 2,
    rotation: 0,
    w: 1.8,
    d: 0.9,
    h: 0.8,
    variant: null,
    entity: null,
    power: null,
  };

  const bigFurniture: Furniture = {
    id: "table1",
    type: "table",
    x: 2.5,
    z: 2,
    rotation: 0,
    w: 10,  // Too big for the room
    d: 10,
    h: 0.75,
    variant: null,
    entity: null,
    power: null,
  };

  assert.equal(checkFurnitureFit(smallFurniture, sampleRoom), true, "Small furniture should fit");
  assert.equal(checkFurnitureFit(bigFurniture, sampleRoom), false, "Big furniture should not fit");
});

test("generateLayoutOptions returns sorted options", () => {
  const options = generateLayoutOptions(sampleRoom, ["sofa", "bed", "table", "lamp"]);

  assert.ok(options.length >= 1, "Should have at least one option");
  // Verify sorted by score descending
  for (let i = 1; i < options.length; i++) {
    assert.ok(options[i - 1].score >= options[i].score, "Options should be sorted by score");
  }
});
