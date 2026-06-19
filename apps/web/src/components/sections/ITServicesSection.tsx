'use client';

import { Globe, Smartphone, Layers, TrendingUp, Palette, Zap } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ITCard from '@/components/ui/ITCard';
import { LucideIcon } from 'lucide-react';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom websites and web applications — Next.js, React, TypeScript.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Cross-platform iOS and Android apps with React Native.',
  },
  {
    icon: Layers,
    title: 'SaaS Product Development',
    description: 'End-to-end SaaS — auth, dashboards, billing, multi-tenancy.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'SEO, Google Ads, social media, and content marketing campaigns.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma design — wireframes, prototypes, design systems.',
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Workflow automation, CRM integration, API connections, AI tools.',
  },
];

export default function ITServicesSection() {
  return (
    <section id="it-services" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel variant="blue">Secondary Expertise</SectionLabel>
          <h2
            className="font-display font-extrabold text-navy mb-3 tracking-[-0.03em]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            IT & Digital Solutions
          </h2>
          <p className="text-smoke text-[0.95rem] mb-12 max-w-2xl">
            Full-stack software development and digital services — websites, apps, SaaS,
            and digital marketing for businesses.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.08}>
              <ITCard {...card} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
