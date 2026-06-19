'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const credentials = [
  { title: 'MBA — Accounting & Information Systems', institution: 'University of Dhaka' },
  { title: 'BBA — Accounting & Information Systems', institution: 'University of Dhaka' },
  { title: 'CA CC (Partly Qualified)', institution: 'ICAB — Chartered Accountancy Track' },
  { title: 'Certified ITP — Income Tax Practitioner', institution: 'NBR Bangladesh — Authorized Tax Lawyer' },
];

export default function CredentialsSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="02">Academic & Professional Background</SectionLabel>
          <h2 className="display-lg text-ink2 mt-10 max-w-2xl">
            Qualifications &amp; credentials.
          </h2>
        </AnimatedSection>

        <div className="mt-16 border-t border-line">
          {credentials.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.06}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline py-8 border-b border-line transition-colors">
                <span className="md:col-span-1 font-mono text-[0.7rem] text-muted tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="md:col-span-7 font-serif font-normal text-[1.5rem] leading-tight text-ink2 group-hover:text-gold transition-colors">
                  {c.title}
                </h3>
                <p className="md:col-span-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted md:text-right">
                  {c.institution}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
