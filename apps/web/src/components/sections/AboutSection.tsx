import SectionHeader from '@/components/ui/SectionHeader';
import RevealOnView from '@/components/ui/RevealOnView';

const stats = [
  { value: 'CA + ITP', label: 'Professional Qualifications', accent: 'gold' },
  { value: '10+', label: 'Years Combined Experience', accent: 'gold' },
  { value: '05', label: 'Firms & Organizations', accent: 'blue' },
  { value: 'MBA · BBA', label: 'University of Dhaka', accent: 'blue' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad relative bg-paper">
      <div className="container-x">
        <SectionHeader
          index="01"
          label="About"
          accent="gold"
          title={[
            'A finance professional',
            <>
              who also speaks{' '}
              <span className="italic text-gold">software.</span>
            </>,
          ]}
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealOnView className="lg:col-span-7" delay={0.05}>
            <div className="max-w-2xl space-y-6 text-[0.98rem] leading-[1.85] text-smoke">
              <p>
                K M Khadimul Hasan holds a BBA and MBA in Accounting &amp;
                Information Systems from the University of Dhaka. He is a CA CC
                (Partly Qualified) under ICAB and a Certified Income Tax Practitioner
                authorized by the National Board of Revenue — giving him legal
                standing as a tax advisor.
              </p>
              <p>
                His career spans the Big Four (KPMG Bangladesh), top CA practice
                (ACNABIN), state banking (Agrani Bank), software (Brain Station 23)
                and enterprise AI (Inception23) — a breadth rarely found in one place.
              </p>
              <p>
                That combination places him at a rare intersection:{' '}
                <span className="text-ink2">
                  able to diagnose complex financial and compliance problems, and to
                  design the digital systems that solve them
                </span>{' '}
                — not as two separate hires, but one.
              </p>
            </div>
          </RevealOnView>

          <RevealOnView className="lg:col-span-5" delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="zone-card group flex flex-col justify-between p-6"
                >
                  <span
                    className={`mb-6 inline-block h-1 w-8 rounded-full ${
                      s.accent === 'blue' ? 'bg-brand' : 'bg-gold'
                    }`}
                  />
                  <p className="font-serif text-[2rem] font-light leading-none text-ink2">
                    {s.value}
                  </p>
                  <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
