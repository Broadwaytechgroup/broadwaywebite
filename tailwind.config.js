/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B8FE0',
          600: '#1A6EC8',
          700: '#0D4A8F',
          800: '#0A3566',
          900: '#061E3D',
          950: '#030F1F',
        },
        orange: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FF9E2C',
          500: '#F58A0A',
          600: '#EA6C00',
          700: '#C05500',
          800: '#9A3F00',
          900: '#7A2F00',
        },
        brand: {
          blue:   '#1A6EC8',
          blueDark: '#0D4A8F',
          blueLight: '#3B8FE0',
          orange: '#F58A0A',
          orangeLight: '#FF9E2C',
          dark:   '#0A1628',
          darker: '#061020',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'circuit-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231A6EC8' stroke-width='0.5' opacity='0.15'%3E%3Cpath d='M10 10h10v10H10zM40 10h10v10H40zM10 40h10v10H10zM40 40h10v10H40z'/%3E%3Cpath d='M20 15h20M15 20v20M45 20v20M20 45h20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.6s ease-out forwards',
        'fade-in':      'fadeIn 0.5s ease-out forwards',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':    'spin 20s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'count-up':     'countUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'card':    '0 4px 24px -4px rgba(26,110,200,0.10)',
        'card-hover': '0 12px 40px -8px rgba(26,110,200,0.22)',
        'glow-blue':  '0 0 40px rgba(26,110,200,0.25)',
        'glow-orange': '0 0 30px rgba(245,138,10,0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
