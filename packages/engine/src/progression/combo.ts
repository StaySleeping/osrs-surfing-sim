export const COMBO_TIERS = [
  'Bronze',
  'Iron',
  'Steel',
  'Mithril',
  'Adamant',
  'Rune',
  'Dragon',
] as const;

export type ComboTierName = (typeof COMBO_TIERS)[number];

/** XP multiplier steps up at each multiple of 10; capped at Dragon (7×). */
export function comboXpMultiplier(combo: number): number {
  if (combo <= 0) {
    return 1;
  }
  return Math.min(COMBO_TIERS.length, Math.floor(combo / 10) + 1);
}

/** Tier name for the current combo count (Bronze at 1–9, Iron at 10–19, …). */
export function comboTierIndex(combo: number): number {
  if (combo <= 0) {
    return 0;
  }
  return Math.min(COMBO_TIERS.length - 1, Math.floor(combo / 10));
}

export function comboTierName(combo: number): ComboTierName {
  return COMBO_TIERS[comboTierIndex(combo)];
}

/** Progress toward the next tier (1–10 within the current decade). */
export function comboTierProgress(combo: number): number {
  if (combo <= 0) {
    return 0;
  }
  const inTier = combo % 10;
  return inTier === 0 ? 10 : inTier;
}
