'use client';

import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

interface Project {
  title: string;
  tag: string;
  status: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  { title: 'TIN Audit Checker', tag: 'Gov-Tech Tool', status: 'Live', description: 'NBR Bangladesh TIN compliance tool. 15,000+ records checked and validated.', tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'] },
  { title: 'UNKORA', tag: 'E-Commerce Platform', status: 'Live', description: 'Bangladesh e-commerce platform with admin dashboard and full order management.', tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Tailwind'], link: 'https://unkora.com.bd' },
  { title: 'Yamama', tag: 'Global Marketplace', status: 'In Progress', description: 'Multi-vendor marketplace with Kafka event streaming, Go microservices and Kubernetes.', tech: ['Next.js', 'Go', 'Kafka', 'Kubernetes'] },
];

export default function ProjectsSection() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="08">Selected Work</SectionLabel>
          <h2 className="display-lg text-ink2 mt-10 max-w-2xl">
            Projects &amp; advisory <span className="italic text-gold">work.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 border-t border-line">
          {projects.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'div';
            return (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <Wrapper
                  {...(p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group block border-b border-line py-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6 items-baseline">
                    <div className="md:col-span-1 font-mono text-[0.7rem] text-muted tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="md:col-span-6">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted mb-3">
                        {p.tag}
                      </p>
                      <h3 className="font-serif text-[2rem] md:text-[2.6rem] leading-none text-ink2 group-hover:text-gold transition-colors flex items-center gap-3">
                        {p.title}
                        {p.link && (
                          <ArrowUpRight
                            size={26}
                            strokeWidth={1.3}
                            className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                          />
                        )}
                      </h3>
                    </div>
                    <p className="md:col-span-3 text-[0.88rem] text-smoke leading-[1.75]">
                      {p.description}
                    </p>
                    <div className="md:col-span-2 flex flex-col md:items-end gap-3">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                        {p.status}
                      </span>
                      <div className="flex flex-wrap md:justify-end gap-x-2 gap-y-1">
                        {p.tech.map((t) => (
                          <span key={t} className="font-mono text-[0.62rem] text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
