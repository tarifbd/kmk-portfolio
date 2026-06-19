import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        steel: '#E2E8F0',
        smoke: '#4A5568',
        muted: '#6B7280',
        light: '#94A3B8',
        navy: {
          DEFAULT: '#0B1527',
          ink: '#1E2A3B',
        },
        gold: {
          DEFAULT: '#A87818',
          light: '#FEFAEE',
          border: '#E4C96B',
        },
        brand: {
          DEFAULT: '#1D50C8',
          light: '#EFF6FF',
          border: '#BFDBFE',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 5.5s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
};

export default config;
