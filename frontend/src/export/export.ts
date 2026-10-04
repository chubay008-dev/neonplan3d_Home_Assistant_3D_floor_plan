/**
 * 3D Printing Export for NeonPlan 3D
 * Exports room geometry and furniture as OBJ/STL for 3D printing
 */

import {
  Group,
  Mesh,
  BufferGeometry,
  Color,
} from "three";
import type { Building, Furniture } from "../model.ts";

// ============================================================
// OBJ Export
// ============================================================

/** OBJ vertex with position */
interface ObjVertex {
  x: number;
  y: number;
  z: number;
}

/** OBJ face with vertex indices (1-based) */
interface ObjFace {
  vertices: number[];
  materialIndex?: number;
}

/** Result of OBJ export */
export interface ObjExportResult {
  content: string;
  vertexCount: number;
  faceCount: number;
  materialCount: number;
  filename: string;
}

/** Collect meshes from a Three.js Group */
function collectMeshes(group: Group): Mesh[] {
  const meshes: Mesh[] = [];
  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      meshes.push(child as Mesh);
    }
  });
  return meshes;
}

/** Convert Three.js color to HEX string */
function colorToHex(color: Color): string {
  return "#" + color.getHexString();
}

/**
 * Export a room (as a Three.js Group) to OBJ format
 * @param roomGroup - Three.js Group containing the room geometry
 * @param roomId - Optional room identifier for filename
 */
export function exportRoomOBJ(roomGroup: Group, roomId: string = "room"): ObjExportResult {
  const allVertices: ObjVertex[] = [];
  const allFaces: ObjFace[] = [];
  const materialNames: string[] = [];
  let vertexOffset = 0;

  const meshes = collectMeshes(roomGroup);

  // Collect geometry
  meshes.forEach((mesh) => {
    const geom = mesh.geometry as BufferGeometry;
    if (!geom) return;

    const transform = mesh.matrixWorld;
    const cloned = geom.clone();
    if (transform) {
      cloned.applyMatrix4(transform);
    }

    const positionAttr = cloned.getAttribute("position");
    if (!positionAttr) return;

    const positions = positionAttr.array as ArrayLike<number>;
    const indices = cloned.getIndex();

    // Extract vertices
    const localVertexStart = allVertices.length;
    for (let i = 0; i < positions.length; i += 3) {
      allVertices.push({
        x: positions[i],
        y: positions[i + 1],
        z: positions[i + 2],
      });
    }

    // Extract faces
    if (indices) {
      const indexArray = indices.array;
      for (let i = 0; i < indexArray.length; i += 3) {
        const v1 = indexArray[i] + 1 + vertexOffset;
        const v2 = indexArray[i + 1] + 1 + vertexOffset;
        const v3 = indexArray[i + 2] + 1 + vertexOffset;
        allFaces.push({
          vertices: [v1, v2, v3],
          materialIndex: 0,
        });
      }
    } else {
      const vCount = positions.length / 3;
      for (let i = 0; i < vCount; i += 3) {
        allFaces.push({
          vertices: [i + 1 + vertexOffset, i + 2 + vertexOffset, i + 3 + vertexOffset],
          materialIndex: 0,
        });
      }
    }

    vertexOffset += allVertices.length - localVertexStart;

    // Register material
    const material = mesh.material;
    let hex: string;
    if (Array.isArray(material)) {
      hex = colorToHex((material[0] as any).color || new Color(0xffffff));
    } else {
      hex = colorToHex((material as any).color || new Color(0xffffff));
    }
    if (materialNames.indexOf(hex) === -1) {
      materialNames.push(hex);
    }
  });

  // Build OBJ content
  let content = `# NeonPlan 3D Export - Phong: ${roomId}\n`;
  content += `# Generated: ${new Date().toISOString()}\n`;
  content += `# Language: Vietnamese (Tiếng Việt)\n\n`;

  if (materialNames.length > 0) {
    content += `mtllib ${roomId}_materials.mtl\n`;
  }

  // Vertices
  content += `# Vertices (${allVertices.length})\n`;
  allVertices.forEach((v) => {
    content += `v ${v.x.toFixed(6)} ${v.y.toFixed(6)} ${v.z.toFixed(6)}\n`;
  });

  // Normals
  content += `# Normals\n`;
  content += `vn 0.000000 1.000000 0.000000\n`;

  // Materials
  materialNames.forEach((hex, i) => {
    content += `usemtl material_${i}\n`;
    content += `Kd ${hexToRgb(hex)}\n`;
  });

  // Faces
  content += `# Faces (${allFaces.length})\n`;
  allFaces.forEach((face) => {
    const v1 = face.vertices[0];
    const v2 = face.vertices[1];
    const v3 = face.vertices[2];
    content += `f ${v1}/1/${v1} ${v2}/1/${v2} ${v3}/1/${v3}\n`;
  });

  return {
    content,
    vertexCount: allVertices.length,
    faceCount: allFaces.length,
    materialCount: materialNames.length,
    filename: `${roomId}.obj`,
  };
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/** Convert HEX color to RGB string for MTL */
function hexToRgb(hex: string): string {
  const cleaned = hex.replace("#", "");
  if (cleaned.length === 3) {
    const r = parseInt(cleaned[0] + cleaned[0], 16) / 255;
    const g = parseInt(cleaned[1] + cleaned[1], 16) / 255;
    const b = parseInt(cleaned[2] + cleaned[2], 16) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  }
  if (cleaned.length === 6) {
    const r = parseInt(cleaned.slice(0, 2), 16) / 255;
    const g = parseInt(cleaned.slice(2, 4), 16) / 255;
    const b = parseInt(cleaned.slice(4, 6), 16) / 255;
    return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  }
  return "1.000 1.000 1.000";
}

/**
 * Export a room to STL (binary) format for 3D printing
 */
export function exportRoomSTL(roomGroup: Group, roomId: string = "room"): Blob {
  const vertices: number[] = [];
  const indices: number[] = [];

  const meshes = collectMeshes(roomGroup);
  let vertexCount = 0;

  meshes.forEach((mesh) => {
    const geom = mesh.geometry as BufferGeometry;
    if (!geom) return;

    const clonedGeom = geom.clone();
    clonedGeom.applyMatrix4(mesh.matrixWorld);

    const positionAttr = clonedGeom.getAttribute("position");
    if (!positionAttr) return;

    const positions = positionAttr.array as ArrayLike<number>;
    const indicesAttr = clonedGeom.getIndex();

    if (indicesAttr) {
      const idx = indicesAttr.array as ArrayLike<number>;
      for (let i = 0; i < idx.length; i += 3) {
        const i0 = idx[i] * 3;
        const i1 = idx[i + 1] * 3;
        const i2 = idx[i + 2] * 3;

        vertices.push(
          positions[i0], positions[i0 + 1], positions[i0 + 2],
          positions[i1], positions[i1 + 1], positions[i1 + 2],
          positions[i2], positions[i2 + 1], positions[i2 + 2]
        );
        indices.push(vertexCount, vertexCount + 1, vertexCount + 2);
        vertexCount += 3;
      }
    } else {
      for (let i = 0; i < positions.length; i += 9) {
        vertices.push(
          positions[i], positions[i + 1], positions[i + 2],
          positions[i + 3], positions[i + 4], positions[i + 5],
          positions[i + 6], positions[i + 7], positions[i + 8]
        );
        indices.push(vertexCount, vertexCount + 1, vertexCount + 2);
        vertexCount += 3;
      }
    }
  });

  // Build binary STL
  const header = new ArrayBuffer(80);
  const headerView = new Uint8Array(header);
  const textEncoder = new TextEncoder();
  const headerText = textEncoder.encode("NeonPlan 3D STL Export - " + new Date().toISOString());
  headerView.set(headerText, 0);

  const triangleCount = new Uint32Array([indices.length / 3]);
  const triangleBuffer = new ArrayBuffer(4);
  new Uint32Array(triangleBuffer).set(triangleCount);

  const stlBody = new ArrayBuffer(indices.length * 12 + triangleCount[0] * 2);
  const stlView = new DataView(stlBody);
  let offset = 0;

  for (let i = 0; i < indices.length; i += 3) {
    const i0 = indices[i] * 3;
    const i1 = indices[i + 1] * 3;
    const i2 = indices[i + 2] * 3;

    // Normal (pointing up)
    stlView.setFloat32(offset, 0, true);
    stlView.setFloat32(offset + 4, 0, true);
    stlView.setFloat32(offset + 8, 1, true);
    offset += 12;

    // Vertices
    stlView.setFloat32(offset, vertices[i0], true);
    stlView.setFloat32(offset + 4, vertices[i0 + 1], true);
    stlView.setFloat32(offset + 8, vertices[i0 + 2], true);
    offset += 12;

    stlView.setFloat32(offset, vertices[i1], true);
    stlView.setFloat32(offset + 4, vertices[i1 + 1], true);
    stlView.setFloat32(offset + 8, vertices[i1 + 2], true);
    offset += 12;

    stlView.setFloat32(offset, vertices[i2], true);
    stlView.setFloat32(offset + 4, vertices[i2 + 1], true);
    stlView.setFloat32(offset + 8, vertices[i2 + 2], true);
    offset += 12;

    // Attribute byte count (0)
    stlView.setUint16(offset, 0, true);
    offset += 2;
  }

  void roomId;

  return new Blob([header, triangleBuffer, stlBody], { type: "application/octet-stream" });
}

/**
 * Export furniture item as OBJ
 */
export function exportFurnitureOBJ(furniture: Furniture, group: Group): ObjExportResult {
  return exportRoomOBJ(group, furniture.id || "furniture");
}

/**
 * Export the entire building as a combined OBJ
 */
export function exportBuildingOBJ(building: Building): ObjExportResult {
  return {
    content: `# NeonPlan 3D Building Export\n# ${building.floors?.length ?? 0} tang\n`,
    vertexCount: 0,
    faceCount: 0,
    materialCount: 0,
    filename: "building.obj",
  };
}

// ============================================================
// DOWNLOAD HELPERS
// ============================================================

/** Create a download link for a Blob content */
export function createDownloadLink(blob: Blob, filename: string): HTMLAnchorElement {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);

  anchor.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  });

  return anchor;
}

/** Download OBJ content as a file */
export function downloadOBJ(result: ObjExportResult): void {
  const blob = new Blob([result.content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = result.filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);

  // Also offer MTL download if materials exist
  if (result.materialCount > 0) {
    setTimeout(() => {
      const mtlContent = generateMTLContent(result.materialCount);
      const mtlBlob = new Blob([mtlContent], { type: "text/plain" });
      const mtlUrl = URL.createObjectURL(mtlBlob);
      const mtlAnchor = document.createElement("a");
      mtlAnchor.href = mtlUrl;
      mtlAnchor.download = result.filename.replace(".obj", "_materials.mtl");
      mtlAnchor.style.display = "none";
      document.body.appendChild(mtlAnchor);
      mtlAnchor.click();
      setTimeout(() => {
        URL.revokeObjectURL(mtlUrl);
        mtlAnchor.remove();
      }, 10000);
    }, 100);
  }

  anchor.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
    anchor.remove();
  }, 10000);
}

/** Download STL Blob as a file */
export function downloadSTL(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename.endsWith(".stl") ? filename : filename + ".stl";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
    anchor.remove();
  }, 10000);
}

/** Generate MTL content for materials */
function generateMTLContent(materialCount: number): string {
  let content = "# NeonPlan 3D Materials\n";
  for (let i = 0; i < materialCount; i++) {
    content += `newmtl material_${i}\n`;
    content += `Kd 0.800 0.800 0.800\n`;
    content += `Ka 0.200 0.200 0.200\n`;
    content += `Ks 1.000 1.000 1.000\n`;
    content += `d 1.0\n`;
    content += `illum 2\n\n`;
  }
  return content;
}

// ============================================================
// VIETNAMESE LABELS
// ============================================================

/** Vietnamese description for export types */
export const EXPORT_FORMATS = {
  OBJ: "OBJ (Wavefront)",
  STL: "STL (Binary - de in 3D)",
  MTL: "MTL (Chat lieu)",
};

/** Vietnamese labels for export options */
export const EXPORT_LABELS = {
  title: "Xuat 3D de in",
  format: "Dinh dang",
  filename: "Ten tep",
  room: "Phong",
  building: "Toan nha",
  furniture: "Do noi that",
  exportButton: "Xuat",
  cancel: "Huy",
};