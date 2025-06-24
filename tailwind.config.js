// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors'; 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors, 
      },
    },
  },
  plugins: [],
}