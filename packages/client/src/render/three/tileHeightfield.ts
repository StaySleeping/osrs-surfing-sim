import { BufferAttribute, BufferGeometry, Color, Mesh, MeshStandardMaterial } from 'three';

export type HeightfieldTile = {
  tx: number;
  ty: number;
  /** Per-tile color when the mesh uses vertexColors. */
  color?: Color;
};

export type HeightfieldBuildOptions = {
  /** Solid material color when not using vertexColors. */
  color?: number;
  vertexColors?: boolean;
  /** Extrude exterior side faces down to skirtBottom. */
  skirts?: boolean;
  skirtBottom?: number;
  roughness?: number;
  metalness?: number;
  transparent?: boolean;
  opacity?: number;
  flatShading?: boolean;
};

function cornerKey(cx: number, cy: number): string {
  return `${cx},${cy}`;
}

function tileKey(tx: number, ty: number): string {
  return `${tx},${ty}`;
}

function parseCornerKey(key: string): { cx: number; cy: number } {
  const comma = key.indexOf(',');
  return {
    cx: Number(key.slice(0, comma)),
    cy: Number(key.slice(comma + 1)),
  };
}

/**
 * Corner-shared tile heightfield: each tile is a quad whose corners match
 * neighbors, so surfaces slope instead of stair-stepping.
 */
export class HeightfieldMesh {
  readonly mesh: Mesh;
  private readonly positions: Float32Array;
  private readonly positionAttr: BufferAttribute;
  private readonly colorAttr: BufferAttribute | null;
  private readonly cornerTopVerts = new Map<string, number[]>();
  private readonly tiles: HeightfieldTile[];

  constructor(
    tiles: HeightfieldTile[],
    getHeight: (cx: number, cy: number) => number,
    options: HeightfieldBuildOptions = {},
  ) {
    this.tiles = tiles;
    const hasSkirts = options.skirts ?? false;
    const skirtBottom = options.skirtBottom ?? 0;
    const useVertexColors = options.vertexColors === true;
    const tileSet = new Set(tiles.map((tile) => tileKey(tile.tx, tile.ty)));

    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];
    const topCornerIndex = new Map<string, number>();

    const ensureTopCorner = (cx: number, cy: number, color: Color | null): number => {
      const key = cornerKey(cx, cy);
      const existing = topCornerIndex.get(key);
      if (existing !== undefined) {
        return existing;
      }
      const vi = positions.length / 3;
      positions.push(cx, getHeight(cx, cy), cy);
      if (useVertexColors && color) {
        colors.push(color.r, color.g, color.b);
      }
      topCornerIndex.set(key, vi);
      const list = this.cornerTopVerts.get(key) ?? [];
      list.push(vi);
      this.cornerTopVerts.set(key, list);
      return vi;
    };

    const pushSkirtEdge = (
      ax: number,
      ay: number,
      bx: number,
      by: number,
      color: Color | null,
    ): void => {
      const topA = ensureTopCorner(ax, ay, color);
      const topB = ensureTopCorner(bx, by, color);
      const botA = positions.length / 3;
      positions.push(ax, skirtBottom, ay);
      const botB = positions.length / 3;
      positions.push(bx, skirtBottom, by);
      if (useVertexColors && color) {
        colors.push(color.r, color.g, color.b, color.r, color.g, color.b);
      }
      indices.push(topA, botA, topB, topB, botA, botB);
    };

    for (const tile of tiles) {
      const { tx, ty } = tile;
      const color = tile.color ?? null;

      const i00 = ensureTopCorner(tx, ty, color);
      const i10 = ensureTopCorner(tx + 1, ty, color);
      const i01 = ensureTopCorner(tx, ty + 1, color);
      const i11 = ensureTopCorner(tx + 1, ty + 1, color);
      indices.push(i00, i01, i10, i10, i01, i11);

      if (hasSkirts) {
        if (!tileSet.has(tileKey(tx, ty - 1))) {
          pushSkirtEdge(tx, ty, tx + 1, ty, color);
        }
        if (!tileSet.has(tileKey(tx + 1, ty))) {
          pushSkirtEdge(tx + 1, ty, tx + 1, ty + 1, color);
        }
        if (!tileSet.has(tileKey(tx, ty + 1))) {
          pushSkirtEdge(tx + 1, ty + 1, tx, ty + 1, color);
        }
        if (!tileSet.has(tileKey(tx - 1, ty))) {
          pushSkirtEdge(tx, ty + 1, tx, ty, color);
        }
      }
    }

    const geometry = new BufferGeometry();
    this.positions = new Float32Array(positions);
    this.positionAttr = new BufferAttribute(this.positions, 3);
    geometry.setAttribute('position', this.positionAttr);
    geometry.setIndex(indices);

    if (useVertexColors) {
      this.colorAttr = new BufferAttribute(new Float32Array(colors), 3);
      geometry.setAttribute('color', this.colorAttr);
    } else {
      this.colorAttr = null;
    }

    const material = new MeshStandardMaterial({
      color: useVertexColors ? 0xffffff : (options.color ?? 0xffffff),
      vertexColors: useVertexColors,
      roughness: options.roughness ?? 0.9,
      metalness: options.metalness ?? 0,
      transparent: options.transparent ?? false,
      opacity: options.opacity ?? 1,
      flatShading: options.flatShading ?? true,
    });

    this.mesh = new Mesh(geometry, material);
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
    this.mesh.frustumCulled = false;
  }

  setCornerHeights(getHeight: (cx: number, cy: number) => number): void {
    for (const [key, verts] of this.cornerTopVerts) {
      const { cx, cy } = parseCornerKey(key);
      const y = getHeight(cx, cy);
      for (const vi of verts) {
        this.positions[vi * 3 + 1] = y;
      }
    }
    this.positionAttr.needsUpdate = true;
  }

  setTileColors(getColor: (tx: number, ty: number) => Color): void {
    if (!this.colorAttr) {
      return;
    }
    const colorArray = this.colorAttr.array as Float32Array;
    for (const tile of this.tiles) {
      const color = getColor(tile.tx, tile.ty);
      const corners = [
        cornerKey(tile.tx, tile.ty),
        cornerKey(tile.tx + 1, tile.ty),
        cornerKey(tile.tx, tile.ty + 1),
        cornerKey(tile.tx + 1, tile.ty + 1),
      ];
      for (const key of corners) {
        const verts = this.cornerTopVerts.get(key);
        if (!verts) {
          continue;
        }
        for (const vi of verts) {
          colorArray[vi * 3] = color.r;
          colorArray[vi * 3 + 1] = color.g;
          colorArray[vi * 3 + 2] = color.b;
        }
      }
    }
    this.colorAttr.needsUpdate = true;
  }

  dispose(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as MeshStandardMaterial).dispose();
  }
}

export function buildHeightfieldMesh(
  tiles: HeightfieldTile[],
  getHeight: (cx: number, cy: number) => number,
  options?: HeightfieldBuildOptions,
): HeightfieldMesh {
  return new HeightfieldMesh(tiles, getHeight, options);
}
