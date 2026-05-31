/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        ink: {
          950: '#06070a',
          900: '#0d1117',
          800: '#151b23',
          700: '#202938',
        },
        accent: {
          cyan: '#7dd3fc',
          green: '#86efac',
          gold: '#fde68a',
        },
      },
      boxShadow: {
        glow: '0 0 44px rgba(125, 211, 252, 0.11)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 700ms ease-out both',
      },
    },
  },
  plugins: [],
};
