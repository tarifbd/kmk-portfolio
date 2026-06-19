'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const credentials = [
  { code: 'CA CC', detail: 'Partly Qualified · ICAB' },
  { code: 'ITP', detail: 'Certified Tax Practitioner · NBR' },
  { code: 'MBA · BBA', detail: 'Accounting & IS · Univ. of Dhaka' },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-cream overflow-hidden">
      {/* Background monogram watermark — editorial signature, not a dot grid */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -right-[6%] top-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-navy/[0.03] hidden lg:block"
        style={{ fontSize: '34rem', letterSpacing: '-0.05em' }}
      >
        KH
      </span>

      {/* Thin vertical rule, left margin — architectural */}
      <div className="pointer-events-none absolute left-8 md:left-16 top-0 bottom-0 w-px bg-navy/5 hidden md:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            {/* Kicker — editorial, not a pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="font-mono text-[0.7rem] tracking-[0.28em] uppercase text-smoke">
                Finance · Tax · Compliance Advisory
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="font-display font-extrabold text-navy leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.25rem)' }}
            >
              K M Khadimul
              <br />
              <span className="text-gold">Hasan</span>
            </motion.h1>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="mt-7 text-[1.05rem] text-ink font-medium max-w-xl"
            >
              Business Advisor &amp; Tax Compliance Specialist — modernising how
              businesses handle accounting, finance and regulation.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease }}
              className="mt-4 text-[0.95rem] text-smoke leading-[1.85] max-w-xl"
            >
              I help businesses across Bangladesh manage tax, VAT, customs and
              regulatory compliance with credential-backed advisory — then bring
              IT, AI and automation to make those processes faster and cleaner.
            </motion.p>

            {/* Credential strip — inline, ruled, no pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {credentials.map((c, i) => (
                <div key={c.code} className="flex items-center gap-6">
                  <div>
                    <p className="font-display font-bold text-[0.95rem] text-navy leading-none">
                      {c.code}
                    </p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted mt-1.5">
                      {c.detail}
                    </p>
                  </div>
                  {i < credentials.length - 1 && (
                    <span className="hidden sm:block h-9 w-px bg-navy/10" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}
              className="mt-11 flex flex-wrap items-center gap-5"
            >
              <a
                href="#expertise"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-display font-semibold text-[0.95rem] rounded-full hover:bg-navy-ink transition-colors"
              >
                Explore Expertise
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-display font-semibold text-[0.95rem] text-navy border-b-2 border-gold pb-0.5 hover:text-gold transition-colors"
              >
                Start a conversation
              </a>
            </motion.div>
          </div>

          {/* RIGHT — grounded credential calling-card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 lg:justify-self-end w-full max-w-sm mx-auto lg:mx-0"
          >
            <div className="rounded-[28px] bg-navy p-2.5 shadow-[0_30px_80px_-30px_rgba(11,21,39,0.5)]">
              {/* Portrait */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-navy-ink">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-extrabold text-white/10 text-7xl select-none">
                    KH
                  </span>
                </div>
                <Image
                  src="/images/profile.jpg"
                  alt="K M Khadimul Hasan"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Status — editorial corner tag, subtle */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-navy/70 backdrop-blur-sm rounded-full pl-2.5 pr-3.5 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-white/80">
                    Available for advisory
                  </span>
                </div>
              </div>

              {/* Credential ledger */}
              <div className="px-4 pt-5 pb-3">
                {credentials.map((c, i) => (
                  <div
                    key={c.code}
                    className={`flex items-baseline justify-between py-2.5 ${
                      i < credentials.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <span className="font-display font-bold text-[0.92rem] text-white">
                      {c.code}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white/45 text-right">
                      {c.detail}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-4 pb-1">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
