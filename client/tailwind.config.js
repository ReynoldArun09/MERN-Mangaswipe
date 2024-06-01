/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '600px',
      'lg': '900px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    fontFamily: {
      'fred': ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        "manga-yellow": "#EFC416",
        "manga-white": "#FFFFFF",
        "manga-black": "#313131"
      }
    },
  },
  plugins: [],
}