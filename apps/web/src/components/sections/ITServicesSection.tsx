'use client';

import { Globe, Smartphone, Layers, TrendingUp, Palette, Zap, LucideIcon } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceCard from '@/components/ui/ServiceCard';

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Globe, title: 'Web Design & Development', description: 'Custom websites and web applications — Next.js, React, TypeScript.' },
  { icon: Smartphone, title: 'App Development', description: 'Cross-platform iOS and Android apps with React Native.' },
  { icon: Layers, title: 'SaaS Product Development', description: 'End-to-end SaaS — auth, dashboards, billing, multi-tenancy.' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'SEO, Google Ads, social media, and content marketing campaigns.' },
  { icon: Palette, title: 'UI / UX Design', description: 'Figma design — wireframes, prototypes, design systems.' },
  { icon: Zap, title: 'Business Automation', description: 'Workflow automation, CRM integration, API connections, AI tools.' },
];

export default function ITServicesSection() {
  return (
    <section id="it-services" className="section-pad bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="06">The Studio — Secondary Expertise</SectionLabel>
          <h2 className="display-lg text-ink2 mt-10 max-w-3xl">
            IT &amp; digital <span className="italic text-gold">solutions.</span>
          </h2>
          <p className="mt-6 text-[0.98rem] text-smoke leading-[1.85] max-w-xl">
            Full-stack software development and digital services — websites, apps,
            SaaS and digital marketing for businesses.
          </p>
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={(i % 3) * 0.06}>
              <ServiceCard {...card} index={i + 1} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
