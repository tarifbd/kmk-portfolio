'use client';

import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CtaBanner() {
  return (
    <section className="bg-navy text-cream">
      <div className="container-x py-28 md:py-40">
        <AnimatedSection>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-white/50 mb-10">
            Let&apos;s work together
          </p>
          <h2 className="display-xl font-light text-cream max-w-4xl">
            Need accounting, tax, or business automation{' '}
            <span className="italic text-gold">support?</span>
          </h2>
          <p className="mt-8 text-[1rem] text-white/55 leading-[1.8] max-w-xl">
            Professional advisory combined with smart technology — to make your
            business more compliant, efficient and organized.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-display font-medium text-cream border-b border-white/40 pb-1 hover:border-cream transition-colors"
            >
              Get in touch
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>
            <a
              href="#integrated"
              className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/50 hover:text-cream transition-colors"
            >
              View integrated services
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
