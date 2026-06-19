'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

interface Experience {
  current?: boolean;
  role: string;
  company: string;
  type: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    current: true,
    role: 'CTO & Project Coordinator',
    company: 'Inception23',
    type: 'Enterprise AI & Software Integration Company',
    bullets: [
      'Leading AI-driven software and digital transformation projects.',
      'Bridging finance, compliance, and technology for enterprise clients.',
    ],
  },
  {
    role: 'Software & Technology',
    company: 'Brain Station 23',
    type: 'Software Development Company',
    bullets: [
      'Technology exposure — software products, IT-driven processes, digital solutions.',
    ],
  },
  {
    role: 'Senior Officer',
    company: 'Agrani Bank',
    type: 'State-owned Commercial Bank',
    bullets: [
      'Banking operations, commercial credit, trade finance, regulatory compliance.',
    ],
  },
  {
    role: 'Audit & Advisory',
    company: 'KPMG Bangladesh',
    type: 'Big Four Professional Services Firm',
    bullets: [
      'Audit, advisory, compliance across banking, manufacturing, services.',
    ],
  },
  {
    role: 'Audit & Advisory',
    company: 'ACNABIN',
    type: 'Chartered Accountancy Firm',
    bullets: [
      'Statutory audit, tax compliance, financial reporting, CA articleship.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Professional Journey</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Work Experience
          </h2>
          <p className="text-smoke text-[0.95rem] mb-16">
            A career spanning Big Four, banking, CA practice, software, and enterprise AI.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Gradient vertical line */}
          <div
            className="absolute left-[15px] top-0 bottom-0 w-[2px]"
            style={{
              background:
                'linear-gradient(to bottom, #A87818 0%, #E2E8F0 50%, #1D50C8 100%)',
            }}
          />

          <div className="space-y-10 pl-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={`${exp.company}-${i}`} delay={i * 0.08}>
                <div className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[49px] top-1 w-[14px] h-[14px] rounded-full border-2 ${
                      exp.current
                        ? 'bg-gold border-gold'
                        : 'bg-cream border-steel'
                    }`}
                  />

                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-light border border-gold-border text-[0.67rem] font-mono uppercase tracking-widest text-gold mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Current
                    </span>
                  )}
                  <h3 className="text-[0.97rem] font-display font-bold text-navy mb-0.5">
                    {exp.role} —{' '}
                    <span
                      style={{
                        background: exp.current
                          ? 'linear-gradient(135deg, #A87818, #C9A84C)'
                          : undefined,
                        WebkitBackgroundClip: exp.current ? 'text' : undefined,
                        WebkitTextFillColor: exp.current ? 'transparent' : undefined,
                        backgroundClip: exp.current ? 'text' : undefined,
                        color: exp.current ? undefined : '#1D50C8',
                      }}
                    >
                      {exp.company}
                    </span>
                  </h3>
                  <p className="text-[0.78rem] font-mono uppercase tracking-wide text-muted mb-3">
                    {exp.type}
                  </p>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-[0.88rem] text-smoke flex gap-2">
                        <span className="text-steel mt-1 flex-shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
