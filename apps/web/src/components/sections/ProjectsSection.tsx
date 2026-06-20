import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';
import TiltCard from '@/components/ui/TiltCard';

type Zone = 'gold' | 'blend' | 'blue';

interface Project {
  title: string;
  tag: string;
  status: string;
  zone: Zone;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'TIN Audit Checker',
    tag: 'Gov-Tech Tool',
    status: 'Live',
    zone: 'gold',
    problem: 'Businesses had no fast way to verify NBR TIN compliance across many records.',
    solution: 'A lightweight validation tool checking and cross-referencing 15,000+ records.',
    result: 'Instant, reliable TIN compliance checks — no manual lookup.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    title: 'AI Voice Agent System',
    tag: 'Enterprise AI',
    status: 'Delivered',
    zone: 'blend',
    problem: 'Matador Group (FMCG) needed to handle high-volume orders without scaling headcount.',
    solution: 'A voice agent with NLP order capture, automation and analytics.',
    result: 'Automated order intake and clearer operational visibility.',
    tech: ['Node.js', 'AI / ML', 'PostgreSQL', 'React.js'],
  },
  {
    title: 'UNKORA',
    tag: 'E-Commerce Platform',
    status: 'Live',
    zone: 'blue',
    problem: 'A growing retailer needed a full commerce platform with real order management.',
    solution: 'An end-to-end store with an admin dashboard and full order lifecycle.',
    result: 'A production e-commerce platform serving live customers.',
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Tailwind'],
    link: 'https://unkora.com.bd',
  },
  {
    title: 'Yamama',
    tag: 'Global Marketplace',
    status: 'In Progress',
    zone: 'blue',
    problem: 'A multi-vendor marketplace needed to scale to high throughput and many sellers.',
    solution: 'Event-driven architecture with Kafka, Go microservices and Kubernetes.',
    result: 'A horizontally scalable marketplace foundation.',
    tech: ['Next.js', 'Go', 'Kafka', 'Kubernetes'],
  },
];

const barClass: Record<Zone, string> = {
  gold: 'bg-gold',
  blue: 'bg-brand',
  blend: 'bg-grad-blend',
};
const tagClass: Record<Zone, string> = {
  gold: 'text-gold',
  blue: 'text-brand',
  blend: 'grad-text-blend',
};

function PSR({ label, children }: { label: string; children: string }) {
  return (
    <div className="border-t border-line pt-3">
      <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-[0.85rem] leading-[1.6] text-smoke">{children}</p>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="section-pad bg-paper">
      <div className="container-x">
        <SectionHeader
          index="09"
          label="Selected Work"
          accent="gold"
          title={[
            <>
              Projects &amp; advisory{' '}
              <span className="italic text-gold">work.</span>
            </>,
          ]}
          intro="A mix of compliance tooling, enterprise AI and full product builds — each solving a concrete business problem."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'div';
            return (
              <RevealOnView key={p.title} delay={(i % 2) * 0.08}>
                <TiltCard className="h-full" max={5}>
                  <Wrapper
                    {...(p.link
                      ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="zone-card group flex h-full flex-col overflow-hidden p-7"
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-0 h-[3px] ${barClass[p.zone]}`}
                    />
                    <div className="flex items-start justify-between">
                      <p
                        className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] ${tagClass[p.zone]}`}
                      >
                        {p.tag}
                      </p>
                      <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="mt-3 flex items-center gap-2 font-serif text-[2rem] leading-none text-ink2 transition-colors group-hover:text-gold">
                      {p.title}
                      {p.link && (
                        <ArrowUpRight
                          size={22}
                          strokeWidth={1.4}
                          className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      )}
                    </h3>

                    <div className="mt-6 space-y-3">
                      <PSR label="Problem">{p.problem}</PSR>
                      <PSR label="Solution">{p.solution}</PSR>
                      <PSR label="Result">{p.result}</PSR>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 pt-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.6rem] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Wrapper>
                </TiltCard>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
