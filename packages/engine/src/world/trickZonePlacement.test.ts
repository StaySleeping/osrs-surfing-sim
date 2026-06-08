import { describe, expect, it } from 'vitest';

import { getTile } from './collision.js';
import { createCoralParkSlice } from './maps.js';
import { relocateTrickZoneOnReef } from './trickZonePlacement.js';
import type { TrickZone } from './features.js';

describe('relocateTrickZoneOnReef', () => {
  it('places resurfaced features on rideable coral away from their old spot', () => {
    const arena = createCoralParkSlice();
    const zone = arena.trickZones[0];
    const original = { ...zone.center };

    let roll = 0;
    const random = () => {
      roll += 1;
      return (roll * 0.137) % 1;
    };

    const relocated = relocateTrickZoneOnReef(zone, arena.map, arena.trickZones, random);

    expect(relocated.tricked).toBe(false);
    expect(getTile(arena.map, Math.floor(relocated.center.x), Math.floor(relocated.center.y))).toBe(
      'coral_rideable',
    );
    expect(
      Math.hypot(relocated.center.x - original.x, relocated.center.y - original.y),
    ).toBeGreaterThan(4);
  });

  it('keeps feature type and id when relocating', () => {
    const arena = createCoralParkSlice();
    const zone: TrickZone = {
      ...arena.trickZones[0],
      tricked: true,
    };

    const relocated = relocateTrickZoneOnReef(zone, arena.map, arena.trickZones, () => 0.42);

    expect(relocated.id).toBe(zone.id);
    expect(relocated.type).toBe(zone.type);
    expect(relocated.prepareSlot).toBe(zone.prepareSlot);
  });
});
