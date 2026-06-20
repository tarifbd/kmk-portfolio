'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CoreFallback from './CoreFallback';

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <CoreFallback />,
});

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return (
      !!window.WebGLRenderingContext &&
      !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

/**
 * Fixed, pointer-events-none layer behind page content (z-0). The 3D object is
 * only visible through sections marked `data-scene-reveal` (hero, the systems
 * showcase, contact); elsewhere opaque sections cover it. We pause rendering
 * (active=false) whenever none of those zones are on screen.
 */
export default function ThreeBackdrop() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce && supportsWebGL()) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const targets = Array.from(document.querySelectorAll('[data-scene-reveal]'));
    if (!targets.length) return;
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) onScreen.add(e.target);
          else onScreen.delete(e.target);
        }
        setActive(onScreen.size > 0);
      },
      { threshold: 0.02 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [enabled]);

  if (!enabled) return <CoreFallback />;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-[900ms] ease-out ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Scene3D active={active} />
    </div>
  );
}
