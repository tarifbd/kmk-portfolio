import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedText from '@/components/ui/AnimatedText';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-30" />
      <div className="absolute -left-24 top-0 h-72 w-72 glow-gold opacity-40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 glow-blue opacity-40 blur-3xl" />

      <div className="container-x relative py-28 md:py-40">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.26em] text-white/50">
          Let&apos;s work together
        </p>
        <AnimatedText
          as="h2"
          delay={0.05}
          className="display-xl mt-8 max-w-4xl font-light text-cream"
          lines={[
            'Need accounting, tax, or',
            <>
              business automation{' '}
              <span className="grad-text-blend italic">support?</span>
            </>,
          ]}
        />
        <p
          className="reveal-up mt-8 max-w-xl text-[1rem] leading-[1.8] text-white/55"
          style={{ animationDelay: '0.2s' }}
        >
          Credentialed advisory combined with smart technology — to make your business
          more compliant, efficient and organized.
        </p>
        <div className="reveal-up mt-12 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s' }}>
          <MagneticButton
            href="#contact"
            className="!bg-cream !text-navy hover:!bg-white"
          >
            Get in touch
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </MagneticButton>
          <MagneticButton
            href="#integrated"
            variant="outline"
            className="!border-white/30 !text-cream hover:!border-cream hover:!bg-white/10"
          >
            View integrated services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
