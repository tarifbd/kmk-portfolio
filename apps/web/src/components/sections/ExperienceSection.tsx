import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';

interface Experience {
  current?: boolean;
  role: string;
  company: string;
  type: string;
  detail: string;
}

const experiences: Experience[] = [
  { current: true, role: 'CTO & Project Coordinator', company: 'Inception23', type: 'Enterprise AI & Software Integration', detail: 'Leading AI-driven software and digital transformation — bridging finance, compliance and technology for enterprise clients.' },
  { role: 'Software & Technology', company: 'Brain Station 23', type: 'Software Development Company', detail: 'Technology exposure — software products, IT-driven processes and digital solutions.' },
  { role: 'Senior Officer', company: 'Agrani Bank', type: 'State-owned Commercial Bank', detail: 'Banking operations, commercial credit, trade finance and regulatory compliance.' },
  { role: 'Audit & Advisory', company: 'KPMG Bangladesh', type: 'Big Four Professional Services', detail: 'Audit, advisory and compliance across banking, manufacturing and services.' },
  { role: 'Audit & Advisory', company: 'ACNABIN', type: 'Chartered Accountancy Firm', detail: 'Statutory audit, tax compliance, financial reporting and CA articleship.' },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad bg-cream">
      <div className="container-x">
        <SectionHeader
          index="04"
          label="Professional Journey"
          accent="gold"
          title={[
            <>
              From the Big Four to{' '}
              <span className="italic text-gold">enterprise AI.</span>
            </>,
          ]}
          intro="A career deliberately spanning finance and technology — audit, banking, CA practice, software and AI."
        />

        <div className="relative mt-16 pl-8 md:pl-10">
          {/* gradient spine: gold (finance) → blue (technology) */}
          <span
            className="absolute left-[5px] top-2 bottom-2 w-px md:left-[7px]"
            style={{
              background:
                'linear-gradient(180deg, #A87818 0%, #9A6E4A 40%, #4A5568 60%, #1D50C8 100%)',
            }}
            aria-hidden
          />

          {experiences.map((exp, i) => (
            <RevealOnView key={`${exp.company}-${i}`} delay={i * 0.05}>
              <div className="group relative border-b border-line py-9">
                {/* node */}
                <span
                  className={`absolute -left-8 top-[2.85rem] h-3 w-3 rounded-full border-2 md:-left-10 ${
                    exp.current
                      ? 'border-gold bg-gold'
                      : 'border-steel bg-cream'
                  }`}
                  aria-hidden
                />
                <div className="grid grid-cols-1 gap-y-3 md:grid-cols-12 md:gap-x-6">
                  <div className="flex items-center gap-3 md:col-span-3">
                    <span className="font-mono text-[0.68rem] tracking-widest text-muted">
                      {String(experiences.length - i).padStart(2, '0')}
                    </span>
                    {exp.current && (
                      <span className="rounded-full bg-gold-light px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-gold">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-serif text-[1.5rem] leading-tight text-ink2 transition-colors group-hover:text-gold">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-[0.85rem] text-smoke">{exp.role}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                      {exp.type}
                    </p>
                  </div>
                  <p className="text-[0.88rem] leading-[1.75] text-smoke md:col-span-4">
                    {exp.detail}
                  </p>
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
