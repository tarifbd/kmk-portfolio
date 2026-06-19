'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const testimonials = [
  { quote: "Khadimul's understanding of our tax compliance needs was exceptional. He didn't just advise — he built us a system that actually works.", name: 'Rafiqul Islam', title: 'Business Owner, Dhaka' },
  { quote: 'He brought both financial expertise and technical know-how to our project. The dashboard he built gives us real visibility into our business.', name: 'Farhan Ahmed', title: 'Startup Founder' },
  { quote: 'Rare to find someone who understands both accounting and software. He automated our VAT process and saved us significant time every month.', name: 'Nadia Rahman', title: 'Finance Manager, Dhaka' },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionLabel index="09">Client Feedback</SectionLabel>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="border-t border-line pt-8 h-full flex flex-col">
                <p className="font-serif font-light text-[1.3rem] leading-[1.5] text-ink2 mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-display font-semibold text-[0.9rem] text-ink2">{t.name}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
