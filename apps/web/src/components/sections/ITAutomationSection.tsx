import {
  Bot,
  Workflow,
  Mail,
  Database,
  BarChart3,
  Plug,
  Globe,
  Smartphone,
  Layers,
  Palette,
  TrendingUp,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import RevealOnView from '@/components/ui/RevealOnView';
import AnimatedText from '@/components/ui/AnimatedText';
import ServiceCard from '@/components/ui/ServiceCard';

type Card = { icon: LucideIcon; title: string; description: string };

const automation: Card[] = [
  { icon: Bot, title: 'AI Agents & Assistants', description: 'Custom AI agents that answer, qualify, route and act — from voice agents to internal copilots.' },
  { icon: Workflow, title: 'Workflow Automation', description: 'End-to-end automation across Gmail, Google Sheets, forms and APIs — eliminate manual, repetitive work.' },
  { icon: Mail, title: 'CRM & Lead Automation', description: 'Capture, score, route and follow up on leads automatically, with clean pipeline reporting.' },
  { icon: BarChart3, title: 'Dashboards & Reporting', description: 'Real-time dashboards and automated reports for cash flow, sales, compliance and KPIs.' },
  { icon: Plug, title: 'API & Systems Integration', description: 'Connect the tools a business already runs on into one reliable, automated flow of data.' },
  { icon: Cpu, title: 'AI-assisted Analysis', description: 'Apply AI to surface anomalies, insights and decisions from operational and financial data.' },
];

const digital: Card[] = [
  { icon: Globe, title: 'Web Design & Development', description: 'Custom websites and web apps — Next.js, React, TypeScript, performant by default.' },
  { icon: Smartphone, title: 'App Development', description: 'Cross-platform iOS and Android apps with React Native.' },
  { icon: Layers, title: 'SaaS Product Development', description: 'End-to-end SaaS — auth, dashboards, billing and multi-tenancy.' },
  { icon: Palette, title: 'UI / UX Design', description: 'Figma design — wireframes, prototypes and design systems.' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'SEO, Google Ads, social and content campaigns that compound.' },
  { icon: Database, title: 'Data & Infrastructure', description: 'PostgreSQL, Prisma, Docker and cloud deploys — built to scale.' },
];

function Grid({ label, cards, startIndex }: { label: string; cards: Card[]; startIndex: number }) {
  return (
    <div className="mt-14 first:mt-0">
      <RevealOnView>
        <p className="mb-8 flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-brand">
          <span className="h-px w-8 bg-brand-border" />
          {label}
        </p>
      </RevealOnView>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <RevealOnView key={card.title} delay={(i % 3) * 0.06}>
            <ServiceCard {...card} index={startIndex + i} accent="blue" />
          </RevealOnView>
        ))}
      </div>
    </div>
  );
}

export default function ITAutomationSection() {
  return (
    <section id="it-automation">
      {/* Transparent showcase band — the 3D core travels to centre here */}
      <div
        data-scene-reveal
        className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-transparent py-24 text-center"
      >
        {/* soft scrim keeps the heading crisp over the object */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[680px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-2xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(244,241,235,0.92), rgba(244,241,235,0))',
          }}
        />
        <div className="container-x relative">
          <p className="eyebrow justify-center text-brand">
            <span className="text-brand">(05)</span>
            <span className="h-px w-8 bg-brand-border" />
            Secondary Expertise — IT, AI &amp; Automation
          </p>
          <AnimatedText
            as="h2"
            delay={0.05}
            className="display-lg mx-auto mt-8 max-w-3xl text-ink2"
            lines={[
              'Systems that',
              <>
                run <span className="grad-text-blue italic">themselves.</span>
              </>,
            ]}
          />
          <p
            className="reveal-up mx-auto mt-6 max-w-xl text-[0.98rem] leading-[1.85] text-smoke"
            style={{ animationDelay: '0.2s' }}
          >
            Beyond advisory: full-stack software, AI agents and automation that turn
            manual finance and business operations into reliable, self-running systems.
          </p>
        </div>
      </div>

      {/* Capability grids on cream */}
      <div className="section-pad bg-cream">
        <div className="container-x">
          <Grid label="AI & Automation Systems" cards={automation} startIndex={1} />
          <Grid label="Digital Products & Web" cards={digital} startIndex={7} />
        </div>
      </div>
    </section>
  );
}
