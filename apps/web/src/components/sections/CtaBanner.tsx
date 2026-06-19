'use client';

export default function CtaBanner() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: '#0B1527' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,120,24,0.14) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(29,80,200,0.14) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          className="font-display font-extrabold text-white mb-4 tracking-[-0.03em]"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
        >
          Need Accounting, Tax, or Business Automation Support?
        </h2>
        <p className="text-white/60 text-[0.95rem] leading-relaxed mb-10 max-w-2xl mx-auto">
          Let&apos;s discuss how professional advisory — combined with smart technology —
          can help your business become more compliant, efficient, and organized.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-7 py-3.5 bg-white text-navy font-display font-bold text-[0.95rem] rounded-xl hover:bg-cream transition-colors"
          >
            Get In Touch →
          </a>
          <a
            href="#integrated"
            className="px-7 py-3.5 border border-white/30 text-white font-display font-semibold text-[0.95rem] rounded-xl hover:bg-white/10 transition-colors"
          >
            View Integrated Services
          </a>
        </div>
      </div>
    </section>
  );
}
