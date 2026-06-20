/**
 * Static, dependency-free visual shown when WebGL is unavailable or the user
 * prefers reduced motion. A soft gold/blue glass orb cluster — only seen
 * through the transparent showcase zones, so it stays subtle elsewhere.
 */
export default function CoreFallback() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute right-[10%] top-[26%] hidden md:block">
        <div className="relative h-72 w-72">
          <div className="absolute inset-0 rounded-full glow-gold blur-2xl opacity-80" />
          <div className="absolute -inset-8 rounded-full glow-blue blur-3xl opacity-50" />
          <div className="absolute inset-6 rounded-full border border-gold/30" />
          <div className="absolute inset-14 rounded-full border border-brand/20" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-grad-blend opacity-70 blur-[2px]" />
        </div>
      </div>
    </div>
  );
}
