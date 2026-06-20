'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Soft light that follows the cursor on fine-pointer desktops. rAF-throttled,
 * transform-only (GPU-friendly), and never shown on touch / reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (ref.current) {
            ref.current.style.transform = `translate3d(${tx - 220}px, ${ty - 220}px, 0)`;
          }
        });
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] overflow-hidden"
    >
      <div
        ref={ref}
        className="h-[440px] w-[440px] rounded-full opacity-60 blur-[60px] will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(201,168,76,0.18), rgba(59,130,246,0.10) 45%, transparent 70%)',
        }}
      />
    </div>
  );
}
