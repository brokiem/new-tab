/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'firefox-dark': '#20123A',
        'dark-gray': '#3d3d3d'
      }
    },
  },
  plugins: [],
}
