import { osrsAssetUrl } from './osrsAssetBase.js';

const OSRS_CSS_BACKGROUNDS: Record<string, string> = {
  '--osrs-url-window-top': 'fixed_mode/window_frame_edge_top.png',
  '--osrs-url-top-right-corner': 'fixed_mode/top_right_corner.png',
  '--osrs-url-chatbox-bg': 'chatbox/background.png',
  '--osrs-url-minimap-left': 'fixed_mode/minimap_left_edge.png',
  '--osrs-url-minimap-right': 'fixed_mode/minimap_right_edge.png',
  '--osrs-url-minimap-frame': 'fixed_mode/minimap_and_compass_frame.png',
  '--osrs-url-minimap-bottom': 'fixed_mode/minimap_frame_bottom.png',
  '--osrs-url-tabs-top': 'fixed_mode/tabs_top_row.png',
  '--osrs-url-tabs-bottom': 'fixed_mode/tabs_row_bottom.png',
  '--osrs-url-tab-selected': 'tab_stone_middle_selected.png',
  '--osrs-url-side-panel': 'fixed_mode/side_panel_background.png',
  '--osrs-url-side-panel-edge-left': 'side_panel_edge_left.png',
  '--osrs-url-side-panel-edge-right': 'side_panel_edge_right.png',
  '--osrs-url-stone-btn': 'button/stone_button_9slice.png',
  '--osrs-url-stone-btn-hovered': 'button/stone_button_9slice_hovered.png',
  '--osrs-url-stone-btn-disabled': 'button/stone_button_9slice_disabled.png',
  '--osrs-url-stone-tab': 'chatbox/button.png',
  '--osrs-url-stone-tab-hovered': 'chatbox/button_hovered.png',
  '--osrs-url-stone-tab-selected': 'chatbox/button_selected.png',
};

export function injectOsrsAssetUrls(): void {
  const root = document.documentElement;
  for (const [property, path] of Object.entries(OSRS_CSS_BACKGROUNDS)) {
    root.style.setProperty(property, `url("${osrsAssetUrl(path)}")`);
  }
}
