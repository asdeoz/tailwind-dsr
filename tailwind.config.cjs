/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'phoenix-red': {
          50: '#FBEBEA',
          100: '#FCDBD7',
          200: '#FFB5AD',
          300: '#FC9489',
          400: '#EA695B',
          500: '#DB3725',
          600: '#B21F13',
          700: '#8A1500',
          800: '#58160F',
          900: '#2C0B07',
          950: '#150504',
        }
      }
    },
  },
  plugins: [],
};
