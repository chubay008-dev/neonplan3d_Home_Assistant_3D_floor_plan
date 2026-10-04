import { test } from "node:test";
import type { XRMode } from "./xr.ts";
import { createARFloorPlane, createVRReticle } from "./xr.ts";
import { RingGeometry, type Mesh } from "three";

test("createARFloorPlane creates ring geometry at floor level", () => {
  const plane = createARFloorPlane(10);
  // verify it exists (cannot test DOM)
  if (!plane) throw new Error("plane is null");
  if (plane.rotation.x !== -Math.PI / 2) throw new Error("rotation wrong");
  if (plane.renderOrder !== -1) throw new Error("renderOrder wrong");
  (plane.geometry as RingGeometry).dispose();
});

test("createVRReticle creates invisible reticle", () => {
  const reticle = createVRReticle();
  // verify it exists (cannot test DOM)
  if (!reticle) throw new Error("reticle is null");
  if (reticle.children.length !== 1) throw new Error("children length wrong");
  if (reticle.visible !== false) throw new Error("visible wrong");
  (reticle.children[0] as Mesh).geometry.dispose();
});

test("XRMode accepts none, ar, vr", () => {
  const modes: XRMode[] = ["none", "ar", "vr"];
  if (modes.length !== 3) throw new Error("modes count wrong");
});