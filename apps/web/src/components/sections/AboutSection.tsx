'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const stats = [
  { value: 'CA + ITP', label: 'Professional Qualifications' },
  { value: '10+', label: 'Years Combined Experience' },
  { value: '05', label: 'Firms & Organizations' },
  { value: 'MBA · BBA', label: 'University of Dhaka' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="01">About</SectionLabel>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12">
          <AnimatedSection className="lg:col-span-7" delay={0.05}>
            <h2 className="display-lg text-ink2 mb-10">
              A finance professional who also speaks{' '}
              <span className="italic text-gold">software.</span>
            </h2>
            <div className="space-y-6 text-[0.98rem] text-smoke leading-[1.85] max-w-2xl">
              <p>
                K M Khadimul Hasan holds a BBA and MBA in Accounting &amp; Information
                Systems from the University of Dhaka. He is a CA CC (Partly Qualified)
                under ICAB and a Certified Income Tax Practitioner authorized by the
                National Board of Revenue — giving him legal standing as a tax advisor.
              </p>
              <p>
                His career spans the Big Four (KPMG Bangladesh), top CA practice
                (ACNABIN), state banking (Agrani Bank), software (Brain Station 23)
                and enterprise AI (Inception23) — a breadth rarely found in one place.
              </p>
              <p>
                That combination places him at a rare intersection: able to diagnose
                complex financial and compliance problems, and to design the digital
                systems that solve them.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.12}>
            <div className="grid grid-cols-2 gap-px bg-line border border-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-paper p-7">
                  <p className="font-serif font-light text-ink2 text-[2rem] leading-none mb-3">
                    {s.value}
                  </p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
