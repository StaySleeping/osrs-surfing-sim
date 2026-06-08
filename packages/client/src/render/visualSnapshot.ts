import {
  interpolateHeadingIndex,
  type HeadingIndex,
  type SimulationSnapshot,
  type WorldPos,
} from '@osrs-surfing/engine';

function lerpPosition(from: WorldPos, to: WorldPos, t: number): WorldPos {
  return {
    x: from.x + (to.x - from.x) * t,
    y: from.y + (to.y - from.y) * t,
  };
}

function positionDistance(a: WorldPos, b: WorldPos): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/**
 * Renders the player between simulation ticks by lerping from the pre-tick
 * position to the post-tick position over exactly one game tick (600ms).
 * Progress is driven by the tick accumulator (0 … 1 within each tick).
 */
export class SurfboardMotionInterpolator {
  private segmentStart: WorldPos = { x: 0, y: 0 };
  private segmentEnd: WorldPos = { x: 0, y: 0 };
  private headingStart: HeadingIndex = 0;
  private headingEnd: HeadingIndex = 0;
  private intendedHeadingStart: HeadingIndex = 0;
  private intendedHeadingEnd: HeadingIndex = 0;

  reset(snapshot: SimulationSnapshot): void {
    const pos = { ...snapshot.surfboard.position };
    this.segmentStart = pos;
    this.segmentEnd = pos;
    this.headingStart = snapshot.surfboard.currentHeading;
    this.headingEnd = snapshot.surfboard.currentHeading;
    this.intendedHeadingStart = snapshot.surfboard.intendedHeading;
    this.intendedHeadingEnd = snapshot.surfboard.intendedHeading;
  }

  onSimulationTick(before: SimulationSnapshot, after: SimulationSnapshot): void {
    this.segmentStart = { ...before.surfboard.position };
    this.segmentEnd = { ...after.surfboard.position };
    this.headingStart = before.surfboard.currentHeading;
    this.headingEnd = after.surfboard.currentHeading;
    this.intendedHeadingStart = before.surfboard.intendedHeading;
    this.intendedHeadingEnd = after.surfboard.intendedHeading;
  }

  /**
   * Re-align when the sim teleports (board mount, test bridge ticks, etc.)
   * without a matching motion segment update.
   */
  ensureSynced(snapshot: SimulationSnapshot): void {
    const simPos = snapshot.surfboard.position;
    const segmentLength = positionDistance(this.segmentStart, this.segmentEnd);
    const simToEnd = positionDistance(simPos, this.segmentEnd);

    if (simToEnd > Math.max(0.2, segmentLength * 0.5 + 0.05)) {
      this.reset(snapshot);
    }
  }

  buildDisplaySnapshot(
    snapshot: SimulationSnapshot,
    tidePhaseFrom: number | null,
    tickBlend: number,
  ): SimulationSnapshot {
    const t = Math.min(1, Math.max(0, tickBlend));

    let displayTide = snapshot.tide;
    if (snapshot.tide && tidePhaseFrom !== null) {
      const phaseRadians = tidePhaseFrom + snapshot.tide.advancePerTick * t;
      displayTide = { ...snapshot.tide, phaseRadians };
    }

    return {
      ...snapshot,
      surfboard: {
        ...snapshot.surfboard,
        position: lerpPosition(this.segmentStart, this.segmentEnd, t),
        currentHeading: interpolateHeadingIndex(this.headingStart, this.headingEnd, t),
        intendedHeading: interpolateHeadingIndex(
          this.intendedHeadingStart,
          this.intendedHeadingEnd,
          t,
        ),
      },
      tide: displayTide,
    };
  }
}
