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
        'dark-gray': '#272727'
      }
    },
  },
  plugins: [],
}
