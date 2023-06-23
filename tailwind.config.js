/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily:{
      noto: ['Noto Sans, sans-serif'],
    },
    colors: {
      zinc: colors.zinc,
      green: colors.green
    },
    extend: {},
  },
  plugins: [],
}
