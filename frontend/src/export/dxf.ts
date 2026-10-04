// DXF R2010 export: the plan as line work in metric metres (1 unit = 1 m) for CAD.
// Layout:
//   - outer + inner wall lines (linetype CONTINUOUS, layers WALLS_EXT / WALLS_INT)
//   - room outlines (layer ROOMS, dashed)
//   - opening symbols: doors as swing arcs + leaves, windows as double lines
//   - text labels: room name + area + W × D (layer ROOM_TEXT)
//   - a simple dimension string along the outer bounding box (layer DIMS)

import { generateWalls, openingHost, locateOpening } from "../geometry/walls.ts";
import { polygonArea, type Building, type Floor } from "../model.ts";

function r(n: number): string {
  return Number(n.toFixed(4)).toString();
}

function segs(pts: [number, number][], layer: string, color = 7): string {
  let s = "";
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    s += wallLine(a, b, layer, color);
  }
  return s;
}

function wallLine(a: [number, number], b: [number, number], layer: string, color = 7): string {
  return "0\nLINE\n8\n" + layer + "\n62\n" + color + "\n10\n" + r(a[0]) + "\n20\n" + r(a[1]) + "\n11\n" + r(b[0]) + "\n21\n" + r(b[1]) + "\n";
}

function labelText(x: number, y: number, text: string, layer = "ROOM_TEXT", height = 0.24): string {
  let s = "0\nTEXT\n8\n" + layer + "\n62\n7\n";
  s += "10\n" + r(x) + "\n20\n" + r(y) + "\n";
  s += "40\n" + height + "\n";
  s += "1\n" + text + "\n";
  s += "7\nRegular\n";
  return s;
}

/** The angle (radians, 0 = +x) of a unit vector. */
function angleOf(dx: number, dz: number): number {
  return Math.atan2(dz, dx);
}

export function buildingToDxf(b: Building): string {
  const L: string[] = [];
  // header + layers
  L.push("0\nSECTION\n2\nHEADER\n");
  L.push("9\n$INSUNITS\n70\n6\n"); // metres
  L.push("9\n$MEASUREMENT\n70\n1\n");
  L.push("9\n$EXTMIN\n10\n0\n20\n0\n30\n0\n");
  L.push("0\nENDSEC\n");
  // layer table
  const layers: [string, number, string][] = [
    ["0", 7, "CONTINUOUS"],
    ["WALLS_EXT", 7, "CONTINUOUS"],
    ["WALLS_INT", 8, "CONTINUOUS"],
    ["ROOMS", 145, "DASHED"],
    ["OPENINGS", 30, "CONTINUOUS"],
    ["ROOM_TEXT", 253, "CONTINUOUS"],
    ["DIMS", 140, "CONTINUOUS"],
  ];
  L.push("0\nSECTION\n2\nTABLES\n");
  L.push("0\nTABLE\n2\nLAYER\n70\n" + layers.length + "\n");
  for (const [name, color, ltype] of layers) {
    L.push("0\nLAYER\n2\n" + name + "\n70\n0\n62\n" + color + "\n6\n" + ltype + "\n");
  }
  L.push("0\nENDTAB\n");
  L.push("0\nTABLE\n2\nLTYPE\n70\n2\n");
  L.push("0\nLTYPE\n2\nCONTINUOUS\n70\n0\n3\nSolid line.\n72\n65\n73\n0\n");
  L.push("0\nLTYPE\n2\nDASHED\n70\n0\n3\nDashed line.\n72\n65\n73\n2\n40\n0.2\n");
  L.push("74\n\n49\n0.15,0\n");
  L.push("49\n0\n");
  L.push("0\nENDTAB\n0\nENDSEC\n");

  // objects: for each floor
  for (const floor of b.floors) {
    L.push(floorObj(floor, b.settings.wall_exterior, b.settings.wall_interior));
  }

  L.push("0\nSECTION\n2\nOBJECTS\n");
  L.push("0\nENDSEC\n");
  L.push("0\nEOF\n");
  return L.join("");
}

function floorObj(f: Floor, exterior: number, interior: number): string {
  const s: string[] = [];
  s.push("0\nSECTION\n2\nENTITIES\n");
  const { walls } = generateWalls(f.rooms, { exterior, interior }, f.walls ?? []);
  // outer wall faces
  for (const w of walls) {
    if (!w.exterior) continue;
    const n = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1;
    const dx = (w.b[0] - w.a[0]) / n;
    const dz = (w.b[1] - w.a[1]) / n;
    // two offset lines along a and b by ±thickness/2
    const offset = (a: [number, number], d: number): [number, number] => [a[0] + dz * d, a[1] - dx * d];
    const aL = offset(w.a, w.left);
    const bL = offset(w.b, w.left);
    const aR = offset(w.a, -w.right);
    const bR = offset(w.b, -w.right);
    s.push(wallLine(aL, bL, "WALLS_EXT", 7));
    s.push(wallLine(aR, bR, "WALLS_EXT", 7));
  }
  // interior wall faces
  for (const w of walls) {
    if (w.exterior) continue;
    const n = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1;
    const dx = (w.b[0] - w.a[0]) / n;
    const dz = (w.b[1] - w.a[1]) / n;
    const offset = (a: [number, number], d: number): [number, number] => [a[0] + dz * d, a[1] - dx * d];
    s.push(wallLine(offset(w.a, w.left), offset(w.b, w.left), "WALLS_INT", 7));
    s.push(wallLine(offset(w.a, -w.right), offset(w.b, -w.right), "WALLS_INT", 7));
  }
  // room outlines (dashed)
  for (const room of f.rooms) {
    s.push(segs(room.points, "ROOMS", 145));
  }
  // openings
  for (const o of f.openings) {
    const host = openingHost(o, f.rooms, f.walls ?? []);
    if (!host) continue;
    const hit = locateOpening(walls, o, host);
    if (!hit) continue;
    const w = hit.wall;
    const sLen = Math.hypot(w.b[0] - w.a[0], w.b[1] - w.a[1]) || 1;
    const ax = (w.b[0] - w.a[0]) / sLen;
    const az = (w.b[1] - w.a[1]) / sLen;
    // left / right normal in the room's wall orientation (per locateOpening: wall.roomLeft === o.room_id)
    const roomOnLeft = w.roomLeft === o.room_id;
    const nx = roomOnLeft ? -az : az;
    const nz = roomOnLeft ? ax : -ax;
    // span start / end points
    const s0 = hit.s - o.width / 2;
    const s1 = hit.s + o.width / 2;
    const p0: [number, number] = [w.a[0] + ax * s0, w.a[1] + az * s0];
    const p1: [number, number] = [w.a[0] + ax * s1, w.a[1] + az * s1];
    // door: a swing arc from p0 to p1 opening into the room, and the leaf line
    if (o.type === "door") {
      const hingeIsLeft = (o.hinge === "left") === !roomOnLeft;
      const hinge = hingeIsLeft ? p0 : p1;
      const free = hingeIsLeft ? p1 : p0;
      const rad = Math.hypot(free[0] - hinge[0], free[1] - hinge[1]);
      const aH = angleOf(hinge[0] - p0[0], hinge[1] - p0[1]); // hinge to p0 (end of door opening)
      const aF = angleOf(free[0] - hinge[0], free[1] - hinge[1]); // hinge to free end of opening
      const from = o.swing === "in" ? aF : aH + Math.PI;
      const to = o.swing === "in" ? aH : aF + Math.PI;
      // normalise CCW
      let d = to - from;
      while (d <= 0) d += Math.PI * 2;
      s.push("0\nARC\n8\nOPENINGS\n62\n30\n10\n" + r(hinge[0]) + "\n20\n" + r(hinge[1]) + "\n40\n" + r(rad) + "\n50\n" + r((from * 180) / Math.PI) + "\n51\n" + r((to * 180) / Math.PI) + "\n");
      s.push(wallLine(hinge, free, "OPENINGS", 30));
      // door leaf frame across the opening
      s.push(wallLine(p0, p1, "OPENINGS", 30));
      // window: two parallel thin lines + ticks
    } else if (o.type === "window") {
      // window sash at sill
      const midY = o.sill + o.height / 2;
      const midP: [number, number] = [p0[0] + (p1[0] - p0[0]) * 0.5, p0[1] + (p1[1] - p0[1]) * 0.5];
      const off = 0.06;
      s.push(wallLine([midP[0] - nx * off, midP[1] - nz * off], [midP[0] + nx * off, midP[1] + nz * off], "OPENINGS", 30));
      void midY;
    }
  }
  // text labels for rooms
  for (const room of f.rooms) {
    const cx = room.points.reduce((s, p) => s + p[0], 0) / room.points.length;
    const cz = room.points.reduce((s, p) => s + p[1], 0) / room.points.length;
    const area = polygonArea(room.points);
    s.push(labelText(cx, cz + 0.1, room.name, "ROOM_TEXT", 0.32));
    const b2 = bbox(room.points);
    s.push(labelText(cx, cz - 0.15, area.toFixed(1) + " m²  " + b2.w.toFixed(1) + " × " + b2.d.toFixed(1) + " m", "ROOM_TEXT", 0.22));
  }
  // overall dims (bounding box of all rooms)
  const allPts = f.rooms.flatMap((r) => r.points);
  const x0 = Math.min(...allPts.map((p) => p[0]));
  const x1 = Math.max(...allPts.map((p) => p[0]));
  const z0 = Math.min(...allPts.map((p) => p[1]));
  const z1 = Math.max(...allPts.map((p) => p[1]));
  const off = 0.5;
  // dimension lines (with extension ticks)
  const tick = (a: [number, number], b: [number, number]): string => wallLine(a, b, "DIMS", 140);
  // top horizontal: x0 -> x1 at z0 - off
  s.push(tick([x0, z0 - 0.1], [x0, z0 - off - 0.1]));
  s.push(tick([x1, z0 - 0.1], [x1, z0 - off - 0.1]));
  s.push(wallLine([x0, z0 - off], [x1, z0 - off], "DIMS", 140));
  // arrowheads
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0) + "\n20\n" + r(z0 - off) + "\n11\n" + r(x0 + 0.15) + "\n21\n" + r(z0 - off + 0.07) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0) + "\n20\n" + r(z0 - off) + "\n11\n" + r(x0 + 0.15) + "\n21\n" + r(z0 - off - 0.07) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x1) + "\n20\n" + r(z0 - off) + "\n11\n" + r(x1 - 0.15) + "\n21\n" + r(z0 - off + 0.07) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x1) + "\n20\n" + r(z0 - off) + "\n11\n" + r(x1 - 0.15) + "\n21\n" + r(z0 - off - 0.07) + "\n");
  s.push(labelText((x0 + x1) / 2, z0 - off - 0.35, (x1 - x0).toFixed(2) + " m", "DIMS", 0.28));
  // left vertical
  s.push(tick([x0 - off - 0.1, z0], [x0 - 0.1, z0]));
  s.push(tick([x0 - off - 0.1, z1], [x0 - 0.1, z1]));
  s.push(wallLine([x0 - off, z0], [x0 - off, z1], "DIMS", 140));
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0 - off) + "\n20\n" + r(z0) + "\n11\n" + r(x0 - off + 0.07) + "\n21\n" + r(z0 + 0.15) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0 - off) + "\n20\n" + r(z0) + "\n11\n" + r(x0 - off - 0.07) + "\n21\n" + r(z0 + 0.15) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0 - off) + "\n20\n" + r(z1) + "\n11\n" + r(x0 - off + 0.07) + "\n21\n" + r(z1 - 0.15) + "\n");
  s.push("0\nLINE\n8\nDIMS\n62\n140\n10\n" + r(x0 - off) + "\n20\n" + r(z1) + "\n11\n" + r(x0 - off - 0.07) + "\n21\n" + r(z1 - 0.15) + "\n");
  const r90 = ((z1 - z0).toFixed(2) + " m").split("");
  s.push("0\nTEXT\n8\nDIMS\n62\n140\n10\n" + r(x0 - off - 0.35) + "\n20\n" + r((z0 + z1) / 2) + "\n40\n0.28\n50\n90\n1\n" + (z1 - z0).toFixed(2) + " m\n7\nRegular\n");
  void r90;
  s.push("0\nENDSEC\n");
  return s.join("");
}

function bbox(pts: [number, number][]): { w: number; d: number } {
  const xs = pts.map((p) => p[0]);
  const zs = pts.map((p) => p[1]);
  return { w: Math.max(...xs) - Math.min(...xs), d: Math.max(...zs) - Math.min(...zs) };
}

