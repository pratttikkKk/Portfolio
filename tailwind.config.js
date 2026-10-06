/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#14B8A6',
        accent: '#7C3AED',
        background: '#0F172A',
        'surface-card': '#1E293B',
        text: '#F8FAFC',
        'surface-dim': '#10131a',
        'surface-container': '#1d2027',
        'surface-container-low': '#191b23',
        'surface-container-high': '#272a31',
        'surface-bright': '#363941',
        'on-surface': '#e1e2ec',
        'on-surface-variant': '#c2c6d6',
        'on-primary': '#FFFFFF',
        'outline': '#8c909f',
        'outline-variant': '#424754',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-lg': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'label': ['14px', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
