import {
  deserializeProgressionState,
  serializeProgressionState,
  type ProgressionState,
} from '@osrs-surfing/engine';

const PROGRESSION_STORAGE_KEY = 'osrs-surfing-progression';

export function loadSavedProgression(): ProgressionState | null {
  try {
    const raw = localStorage.getItem(PROGRESSION_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return deserializeProgressionState(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveProgression(state: ProgressionState): void {
  try {
    localStorage.setItem(PROGRESSION_STORAGE_KEY, JSON.stringify(serializeProgressionState(state)));
  } catch {
    // Ignore quota or privacy-mode failures.
  }
}
