'use client';

import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';

const badges = [
  { code: 'CA CC', sub: 'Chartered Accountancy · ICAB', accent: 'gold', cls: 'right-2 top-6 animate-float-a' },
  { code: 'ITP Certified', sub: 'Income Tax Practitioner · NBR', accent: 'gold', cls: 'left-0 top-1/2 animate-float-b' },
  { code: 'CTO · Inception23', sub: 'Enterprise AI & Automation', accent: 'blue', cls: 'right-8 bottom-8 animate-float-a [animation-delay:0.6s]' },
];

const social = [
  { href: 'https://github.com', label: 'GitHub' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'mailto:khadimul@inception23.com', label: 'Email' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-scene-reveal
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper pb-16 pt-28 lg:bg-transparent"
    >
      {/* Soft scrim so text stays legible over the 3D object on small screens */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.5] lg:opacity-30" />

      <div className="container-x w-full">
        {/* meta row */}
        <div
          className="reveal-up mb-12 flex items-center justify-between border-b border-line pb-6"
        >
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
            Dhaka, Bangladesh
          </span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted sm:block">
            Advisory &amp; Systems
          </span>
          <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-gold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-gold" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Available 2026
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            <div
              className="reveal-up mb-7 inline-flex items-center gap-2 rounded-full border border-gold-border/60 bg-gold-light px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-gold">
                Finance · Tax · Compliance Professional
              </span>
            </div>

            <AnimatedText
              as="h1"
              className="display-xl text-ink2"
              delay={0.08}
              stagger={0.1}
              lines={[
                'K M Khadimul',
                <span key="name" className="font-light italic text-gold">
                  Hasan
                </span>,
              ]}
            />

            <p
              className="reveal-up mt-9 max-w-xl text-[1.05rem] leading-[1.8] text-smoke"
              style={{ animationDelay: '0.32s' }}
            >
              I help businesses across Bangladesh master{' '}
              <span className="text-ink2">accounting, tax, VAT, customs and
              regulatory compliance</span>{' '}
              — then modernise it all with IT, AI and automation. Credential-backed
              advisory, engineered into systems that actually run.
            </p>

            <div
              className="reveal-up mt-8 flex flex-wrap gap-x-6 gap-y-2"
              style={{ animationDelay: '0.4s' }}
            >
              {['CA CC · ICAB', 'Certified ITP · NBR', 'MBA & BBA (AIS) · University of Dhaka'].map(
                (c) => (
                  <span
                    key={c}
                    className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted"
                  >
                    {c}
                  </span>
                ),
              )}
            </div>

            <div
              className="reveal-up mt-11 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.48s' }}
            >
              <MagneticButton href="#expertise">
                View expertise
                <ArrowDownRight size={16} strokeWidth={1.8} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                Start a conversation
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </MagneticButton>
            </div>

            <div
              className="reveal-up mt-12 flex items-center gap-6"
              style={{ animationDelay: '0.56s' }}
            >
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink2"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D object stage + floating glass badges (desktop) */}
          <div className="relative hidden h-[460px] lg:col-span-5 lg:block">
            {badges.map((b) => (
              <div
                key={b.code}
                className={`glass absolute w-max rounded-2xl px-4 py-3 ${b.cls}`}
              >
                <p
                  className={`font-display text-[0.92rem] font-semibold ${
                    b.accent === 'blue' ? 'text-brand' : 'text-gold'
                  }`}
                >
                  {b.code}
                </p>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                  {b.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
          Scroll
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-cue rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
