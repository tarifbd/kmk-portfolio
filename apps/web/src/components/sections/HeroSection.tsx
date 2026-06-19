'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-paper pt-28 pb-16 overflow-hidden">
      <div className="container-x w-full">
        {/* Top meta row */}
        <motion.div
          {...fade(0)}
          className="flex items-center justify-between border-b border-line pb-6 mb-14"
        >
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-muted">
            Dhaka, Bangladesh
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-muted hidden sm:block">
            Finance · Tax · Compliance — Est. Advisory
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-gold">
            Available 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Headline */}
          <div className="lg:col-span-8">
            <motion.h1
              {...fade(0.08)}
              className="display-xl text-ink2"
            >
              K M Khadimul
              <br />
              <span className="italic font-light text-gold">Hasan</span>
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              className="mt-10 max-w-xl text-[1.05rem] leading-[1.8] text-smoke"
            >
              A business advisor and tax-compliance specialist helping companies
              across Bangladesh manage accounting, VAT, customs and regulation —
              then modernise it all with IT, AI and automation.
            </motion.p>

            <motion.div {...fade(0.3)} className="mt-12 flex flex-wrap items-center gap-8">
              <a href="#expertise" className="arrow-link text-[0.95rem]">
                View expertise
                <ArrowDownRight size={16} strokeWidth={1.6} />
              </a>
              <a
                href="#contact"
                className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted hover:text-ink2 transition-colors"
              >
                Start a conversation
              </a>
            </motion.div>
          </div>

          {/* Portrait + credential ledger */}
          <motion.div
            {...fade(0.36)}
            className="lg:col-span-4 w-full"
          >
            <div className="relative aspect-[4/5] w-full max-w-[320px] ml-auto overflow-hidden bg-navy-ink grayscale">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white/10 text-7xl select-none">KH</span>
              </div>
              <Image
                src="/images/profile.jpg"
                alt="K M Khadimul Hasan"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="max-w-[320px] ml-auto mt-5 space-y-2.5">
              {[
                ['CA CC', '(Partly Qualified) · ICAB'],
                ['ITP', 'Certified Tax Practitioner · NBR'],
                ['MBA · BBA', 'Accounting & IS · Univ. of Dhaka'],
              ].map(([code, detail]) => (
                <div
                  key={code}
                  className="flex items-baseline justify-between border-b border-line pb-2.5"
                >
                  <span className="font-display font-semibold text-[0.85rem] text-ink2">
                    {code}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted text-right">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
