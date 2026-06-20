'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { scrollStore } from '@/lib/scrollStore';

/**
 * Lenis smooth scroll + scroll-progress publisher.
 * - Disabled under prefers-reduced-motion (falls back to a passive scroll
 *   listener that still publishes progress, so the scene/bar stay in sync).
 * - Delegated handler smooth-scrolls all in-page anchor links with a nav offset.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const publishNative = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollStore.set({ progress: max > 0 ? window.scrollY / max : 0 });
    };

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!reduce) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        lerp: 0.1,
      });

      lenis.on('scroll', (e: { scroll: number; velocity: number }) => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollStore.set({
          progress: max > 0 ? e.scroll / max : 0,
          velocity: e.velocity,
        });
      });

      const loop = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    } else {
      window.addEventListener('scroll', publishNative, { passive: true });
      publishNative();
    }

    // Smooth in-page anchor navigation (works with or without Lenis).
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.3 });
      } else {
        (target as HTMLElement).scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', publishNative);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
