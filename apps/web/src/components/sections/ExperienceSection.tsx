'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

interface Experience {
  current?: boolean;
  role: string;
  company: string;
  type: string;
  detail: string;
}

const experiences: Experience[] = [
  { current: true, role: 'CTO & Project Coordinator', company: 'Inception23', type: 'Enterprise AI & Software Integration', detail: 'Leading AI-driven software and digital transformation — bridging finance, compliance and technology for enterprise clients.' },
  { role: 'Software & Technology', company: 'Brain Station 23', type: 'Software Development Company', detail: 'Technology exposure — software products, IT-driven processes, digital solutions.' },
  { role: 'Senior Officer', company: 'Agrani Bank', type: 'State-owned Commercial Bank', detail: 'Banking operations, commercial credit, trade finance, regulatory compliance.' },
  { role: 'Audit & Advisory', company: 'KPMG Bangladesh', type: 'Big Four Professional Services', detail: 'Audit, advisory and compliance across banking, manufacturing and services.' },
  { role: 'Audit & Advisory', company: 'ACNABIN', type: 'Chartered Accountancy Firm', detail: 'Statutory audit, tax compliance, financial reporting, CA articleship.' },
];

export default function ExperienceSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="07">Professional Journey</SectionLabel>
          <h2 className="display-lg text-ink2 mt-10 max-w-2xl">
            Selected <span className="italic text-gold">experience.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 border-t border-line">
          {experiences.map((exp, i) => (
            <AnimatedSection key={`${exp.company}-${i}`} delay={i * 0.05}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-6 py-9 border-b border-line">
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-[0.68rem] text-muted tracking-widest">
                    {String(experiences.length - i).padStart(2, '0')}
                  </span>
                  {exp.current && (
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                      Current
                    </span>
                  )}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-[1.5rem] leading-tight text-ink2 group-hover:text-gold transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-[0.85rem] text-smoke mt-1">{exp.role}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted mt-1">
                    {exp.type}
                  </p>
                </div>
                <p className="md:col-span-4 text-[0.88rem] text-smoke leading-[1.75]">
                  {exp.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
