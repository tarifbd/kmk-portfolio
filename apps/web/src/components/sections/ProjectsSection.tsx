'use client';

import { ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

interface Project {
  zone: 'finance' | 'blend' | 'it';
  title: string;
  tag: string;
  status: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    zone: 'finance',
    title: 'TIN Audit Checker',
    tag: 'Gov-Tech Tool',
    status: 'Live',
    description:
      'NBR Bangladesh TIN compliance tool. 15,000+ records checked and validated.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
  },
  {
    zone: 'blend',
    title: 'AI Voice Agent System',
    tag: 'Enterprise AI',
    status: 'Delivered',
    description:
      'Voice agent for Matador Group FMCG — NLP, order automation, and analytics pipeline.',
    tech: ['Node.js', 'AI/ML', 'PostgreSQL', 'React.js'],
  },
  {
    zone: 'it',
    title: 'UNKORA',
    tag: 'E-Commerce Platform',
    status: 'Live',
    description:
      'Bangladesh e-commerce platform with admin dashboard and full order management.',
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://unkora.com.bd',
  },
  {
    zone: 'it',
    title: 'Yamama',
    tag: 'Global Marketplace',
    status: 'In Progress',
    description:
      'Multi-vendor marketplace with Kafka event streaming, Go microservices, and Kubernetes.',
    tech: ['Next.js', 'Go', 'Kafka', 'Kubernetes'],
  },
];

const barColor: Record<Project['zone'], string> = {
  finance: '#A87818',
  blend: 'linear-gradient(90deg, #A87818, #1D50C8)',
  it: '#1D50C8',
};

const statusColor: Record<string, string> = {
  Live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Delivered: 'bg-gold-light text-gold border-gold-border',
  'In Progress': 'bg-brand-light text-brand border-brand-border',
};

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Work Highlights</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-12 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Projects & Advisory Work
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="bg-white border border-steel rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                {/* Color bar */}
                <div
                  className="h-[3px]"
                  style={{
                    background: barColor[p.zone],
                  }}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="font-mono text-[0.67rem] uppercase tracking-widest text-muted">
                        {p.tag}
                      </span>
                      <h3 className="text-[0.97rem] font-display font-bold text-navy mt-0.5">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[0.67rem] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full border flex-shrink-0 ${statusColor[p.status] || ''}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[0.85rem] text-smoke leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[0.7rem] font-mono bg-cream border border-steel px-2 py-0.5 rounded-md text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-brand hover:underline"
                    >
                      Visit Site <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
