'use client';

import { useEffect, type RefObject } from 'react';
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion';

export type PointerOffset = {
  /** Normalized x offset in roughly [-0.5, 0.5] (eased via spring). */
  x: MotionValue<number>;
  /** Normalized y offset in roughly [-0.5, 0.5] (eased via spring). */
  y: MotionValue<number>;
};

/**
 * Tracks the pointer relative to a target element and exposes a smoothed,
 * normalized offset that consumers can scale to their own parallax range.
 *
 * Notes:
 *  - We throttle to one rAF per move event to avoid React-side noise.
 *  - We attach to `pointermove` (covers mouse + pen + touch hover-like cases).
 *  - When the pointer leaves the element, the offset eases back to 0.
 */
export function usePointerParallax(targetRef: RefObject<HTMLElement | null>): PointerOffset {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring config tuned for "calm and intentional" — soft, no overshoot.
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        x.set(nx);
        y.set(ny);
        raf = 0;
      });
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [targetRef, x, y]);

  return { x: sx, y: sy };
}
