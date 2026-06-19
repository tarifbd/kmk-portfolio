'use client';

import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
      {/* LEFT — white + dot grid */}
      <div
        className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32 bg-white relative"
        style={{
          backgroundImage:
            'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div className="relative z-10 max-w-[520px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border bg-gold-light mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span className="font-mono text-[0.67rem] uppercase tracking-[0.22em] text-gold">
              Business · Finance · Tax · Compliance Professional
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-navy mb-4 leading-[1.07] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)' }}
          >
            K M{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A87818, #C9A84C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Khadimul
            </span>{' '}
            Hasan
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[0.95rem] text-smoke mb-5"
          >
            Business Advisor · Tax & Compliance Specialist · IT & Automation Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[0.95rem] text-smoke leading-[1.8] mb-8"
          >
            I help businesses manage accounting, finance, tax, VAT, customs, and regulatory
            compliance — with professional advisory support backed by CA and ITP credentials.
            I also bring IT, AI, and automation expertise to modernize how businesses operate.
          </motion.p>

          {/* Credential pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2 mb-10"
          >
            {[
              'CA CC · Partly Qualified CA',
              'Certified ITP — Income Tax Lawyer',
              'MBA & BBA (AIS) — University of Dhaka',
            ].map((cred) => (
              <div
                key={cred}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-gold-border bg-gold-light w-fit"
              >
                <Award size={13} className="text-gold flex-shrink-0" />
                <span className="font-mono text-[0.67rem] uppercase tracking-[0.16em] text-gold">
                  {cred}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#expertise"
              className="px-6 py-3 bg-navy text-white font-display font-bold text-[0.95rem] rounded-xl hover:bg-navy-ink transition-colors"
            >
              View Expertise →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gold text-gold text-[0.95rem] font-display font-semibold rounded-xl bg-gold-light hover:bg-gold-border/20 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* RIGHT — navy */}
      <div
        className="relative flex items-center justify-center py-24 lg:py-0 overflow-hidden"
        style={{
          background: '#0B1527',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        {/* Radial glows */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168,120,24,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(29,80,200,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-80 h-80 rounded-full border border-white/6" />
          <div className="absolute w-96 h-96 rounded-full border border-white/[0.04]" />
        </div>

        {/* Photo frame */}
        <div className="relative">
          <div
            className="w-[220px] h-[275px] rounded-3xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.09)',
              border: '2px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="K M Khadimul Hasan"
              fill
              className="object-cover object-center"
              onError={() => {}}
              priority
            />
            {/* Initials fallback — always shown until image loads */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-display font-extrabold text-white/20 select-none">KH</span>
            </div>
          </div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:flex absolute -top-4 -left-4 items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[0.7rem] font-mono font-medium text-navy whitespace-nowrap">
              Open to Advisory Engagements
            </span>
          </motion.div>

          {/* Badge 1 — CA CC */}
          <motion.div
            animate={{ translateY: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden md:block absolute -right-12 -top-6 bg-white rounded-xl px-3 py-2.5 shadow-lg border-l-[3px] border-l-gold min-w-[120px]"
          >
            <p className="text-[0.78rem] font-display font-bold text-navy">CA CC</p>
            <p className="text-[0.67rem] text-muted font-mono">Chartered Accountancy</p>
          </motion.div>

          {/* Badge 2 — ITP */}
          <motion.div
            animate={{ translateY: [-8, 0, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden md:block absolute -left-16 -bottom-4 bg-white rounded-xl px-3 py-2.5 shadow-lg border-l-[3px] border-l-gold min-w-[130px]"
          >
            <p className="text-[0.78rem] font-display font-bold text-navy">ITP Certified</p>
            <p className="text-[0.67rem] text-muted font-mono">Income Tax Practitioner</p>
          </motion.div>

          {/* Badge 3 — MBA */}
          <motion.div
            animate={{ translateY: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="hidden md:block absolute -right-14 bottom-10 bg-white rounded-xl px-3 py-2.5 shadow-lg border-l-[3px] border-l-brand min-w-[120px]"
          >
            <p className="text-[0.78rem] font-display font-bold text-navy">MBA · DU</p>
            <p className="text-[0.67rem] text-muted font-mono">Accounting & Info Systems</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
