---
name: osrs-surfing-engine
description: Work on the @osrs-surfing/engine simulation package — movement, collision, simulation ticks, snapshots, and world maps. Use when editing packages/engine, simulation logic, surfboard movement, pathfinding, or engine tests.
---

# OSRS surfing engine

## Package layout

```
packages/engine/src/
  game/simulation.ts    # Main tick loop, tide, trick sync
  world/                # Maps, collision, features, placement
  movement/             # Heading, surfboard, pathfinder, on-foot
  progression/          # XP / tokens (if present)
  constants/            # Shared numeric constants
```

## Simulation flow

Each tick (`Simulation.tick`):

1. Advance player / board movement.
2. `tickTide` if tide active.
3. `syncTrickZonesWithTide` — purge, spawn, feature state.
4. Build snapshot for client.

Client reads snapshots only — never duplicate game rules in the renderer.

## Movement conventions

- OSRS-style 16 headings, quarter-tile grid.
- Board: paddle vs ride speed states; arc turns (not instant snap).
- On-foot: BFS pathfinding on walkable tiles.

## Testing & validation

```bash
pnpm test                    # engine vitest
pnpm validate                # format + lint + test + build
```

- Unit tests live beside source (`*.test.ts`).
- Use `createCoralParkSlice()` for arena fixtures.

## Related skills

- Tide/features: use **coral-park-tide** skill.
- Client rendering: edit `packages/client` separately; import from `@osrs-surfing/engine`.
