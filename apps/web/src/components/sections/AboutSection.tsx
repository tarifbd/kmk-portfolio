'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const stats = [
  { value: 'CA+ITP', label: 'Professional Qualifications' },
  { value: '10+', label: 'Years Combined Experience' },
  { value: '5', label: 'Firms & Organizations' },
  { value: 'MBA+BBA', label: 'University of Dhaka' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>About Me</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Business Professional.{' '}
            <span className="text-gold">Tech Enabler.</span>
          </h2>
          <p className="text-smoke text-[0.95rem] mb-12">
            Dhaka, Bangladesh — combining finance expertise with modern technology.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          {/* Left — bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-[0.95rem] text-smoke leading-[1.8]">
              <p>
                K M Khadimul Hasan holds a BBA and MBA in Accounting & Information Systems
                from the University of Dhaka — one of Bangladesh&apos;s premier institutions.
                He is a CA CC (Partly Qualified Chartered Accountant) under ICAB and a
                Certified Income Tax Practitioner (ITP) authorized by the National Board of
                Revenue (NBR) Bangladesh, giving him legal standing as a tax advisor and
                practitioner.
              </p>
              <p>
                His career spans the Big Four (KPMG Bangladesh), top CA firms (ACNABIN),
                state banking (Agrani Bank), software development (Brain Station 23), and
                enterprise AI (Inception23) — a breadth that is rare in Bangladesh&apos;s
                professional landscape.
              </p>
              <p>
                This unique combination of deep finance credentials and real-world technology
                experience positions Khadimul at a rare intersection: able to both diagnose
                complex financial and compliance challenges AND design and implement modern
                digital solutions to solve them. His clients gain a professional who speaks
                both the language of accounting and the language of software.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — stats bento */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white rounded-2xl border border-steel border-t-[3px] border-t-gold p-6"
                >
                  <p
                    className="font-display font-extrabold text-navy mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[0.78rem] font-mono text-muted uppercase tracking-wide">
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
