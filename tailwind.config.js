/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#080b14',
          800: '#0d1117',
          700: '#111827',
          600: '#1a2235',
          500: '#1e2d40',
        },
        cyan: {
          400: '#00d4ff',
          500: '#00b8e6',
          600: '#0099cc',
        },
        neon: {
          cyan:   '#00d4ff',
          purple: '#7c3aed',
          pink:   '#f472b6',
          green:  '#4ade80',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid':       "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
        'hero-gradient':    'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 50%)',
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)',
        'neon-purple': '0 0 20px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)',
        'neon-pink':   '0 0 20px rgba(244,114,182,0.3), 0 0 60px rgba(244,114,182,0.1)',
        'glass':       '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover':  '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.1)',
      },
      animation: {
        'float':        'float 4s ease-in-out infinite',
        'float-slow':   'float-slow 6s ease-in-out infinite',
        'pulse-glow':   'pulse-glow 2s ease-in-out infinite',
        'scan':         'scan 8s linear infinite',
        'gradient':     'gradient-rotate 4s linear infinite',
        'spin-slow':    'spin 8s linear infinite',
        'bounce-slow':  'bounce 3s ease-in-out infinite',
        'fade-in':      'fadeIn 0.5s ease-in-out',
        'slide-up':     'slideUp 0.5s ease-out',
        'slide-in-left':'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,212,255,0.3)' },
          '50%':       { boxShadow: '0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'gradient-rotate': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};