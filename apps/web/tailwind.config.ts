import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        paper: '#F4F1EB',
        steel: '#E2E8F0',
        line: '#E5E0D8',
        smoke: '#4A5568',
        muted: '#6B7280',
        light: '#94A3B8',
        ink2: '#15161A',
        navy: {
          DEFAULT: '#0B1527',
          ink: '#1E2A3B',
        },
        gold: {
          DEFAULT: '#A87818',
          soft: '#C9A84C',
          light: '#FEFAEE',
          border: '#E4C96B',
        },
        brand: {
          DEFAULT: '#1D50C8',
          soft: '#3B82F6',
          light: '#EFF6FF',
          border: '#BFDBFE',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      backgroundImage: {
        'grad-gold': 'linear-gradient(135deg, #A87818, #C9A84C)',
        'grad-blue': 'linear-gradient(135deg, #1D50C8, #3B82F6)',
        'grad-blend': 'linear-gradient(115deg, #A87818 0%, #9A6E4A 45%, #1D50C8 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,21,39,0.04), 0 8px 24px rgba(11,21,39,0.05)',
        lift: '0 18px 50px -20px rgba(11,21,39,0.22)',
        glass: '0 1px 0 rgba(255,255,255,0.7) inset, 0 18px 48px -24px rgba(11,21,39,0.25)',
        'gold-glow': '0 10px 40px -12px rgba(168,120,24,0.4)',
        'blue-glow': '0 10px 40px -12px rgba(29,80,200,0.35)',
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 5.5s ease-in-out infinite',
        'spin-slow': 'spin 26s linear infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        'pulse-ring': 'pulseRing 3.4s ease-out infinite',
        'scroll-cue': 'scrollCue 1.9s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatB: {
          '0%,100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.5' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        scrollCue: {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(7px)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
