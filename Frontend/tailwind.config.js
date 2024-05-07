/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      brightness: {
        25: '.25',
        175: '1.75',
      },
      keyframes: {
        customShadowAnimation: {
          '0%, 100%': {
            boxShadow: '0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #08f, 0 0 15px #08f, 0 0 30px #08f',
          },
          '50%': {
            boxShadow: '0 0 2px #fff, inset 0 0 2px #fff, 0 0 10px #08f, 0 0 20px #08f, 0 0 40px #08f',
          },
        },
      },
      animation: {
        'custom-shadow': 'customShadowAnimation 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}