import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';
import Marquee from '@/components/ui/Marquee';

interface Group {
  label: string;
  accent: 'gold' | 'blue';
  skills: string[];
}

const groups: Group[] = [
  { label: 'Finance & Business', accent: 'gold', skills: ['Accounting', 'Tax & VAT', 'Audit & Controls', 'Compliance', 'Financial Modelling', 'ERP / QuickBooks'] },
  { label: 'AI & Automation', accent: 'blue', skills: ['OpenAI API', 'AI Agents', 'RAG', 'Workflow Automation', 'Google Apps Script', 'API Integration'] },
  { label: 'Frontend', accent: 'blue', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend', accent: 'blue', skills: ['Node.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Prisma', 'Redis'] },
  { label: 'DevOps', accent: 'blue', skills: ['Docker', 'Vercel', 'Railway', 'CI/CD', 'GitHub Actions'] },
];

const marquee = [
  'Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'OpenAI', 'AI Agents',
  'Tailwind', 'Docker', 'QuickBooks', 'VAT', 'ITP', 'Audit', 'Automation', 'React',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-pad bg-paper">
      <div className="container-x">
        <SectionHeader
          index="08"
          label="Capabilities"
          accent="blue"
          title={[
            <>
              A stack that bridges{' '}
              <span className="grad-text-blend italic">both worlds.</span>
            </>,
          ]}
          intro="From ledgers to language models — the tools used to diagnose finance problems and build the systems that solve them."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <RevealOnView key={g.label} delay={(i % 3) * 0.06}>
              <div className="zone-card h-full">
                <p
                  className={`mb-6 flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] ${
                    g.accent === 'gold' ? 'text-gold' : 'text-brand'
                  }`}
                >
                  <span
                    className={`h-px w-7 ${g.accent === 'gold' ? 'bg-gold-border' : 'bg-brand-border'}`}
                  />
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-white/60 px-3 py-1.5 font-mono text-[0.68rem] text-smoke transition-colors hover:border-ink2/30 hover:text-ink2"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-line py-5">
        <Marquee items={marquee} />
      </div>
    </section>
  );
}
