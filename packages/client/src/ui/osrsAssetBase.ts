/** Public asset roots — respect Vite `base` for GitHub Pages subpaths. */
export const OSRS_ASSET_BASE = `${import.meta.env.BASE_URL}assets/osrs`;
export const SURF_ASSET_BASE = `${import.meta.env.BASE_URL}assets/surf`;

export function osrsAssetUrl(path: string): string {
  return `${OSRS_ASSET_BASE}/${path}`;
}

export function surfAssetUrl(path: string): string {
  return `${SURF_ASSET_BASE}/${path}`;
}
