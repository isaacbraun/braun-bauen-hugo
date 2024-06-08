/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./content/*.md", "./content/**/*.md", "./layouts/*.html", "./layouts/**/*.html", "./public/*.html", "./public/**/*.html"],
  theme: {
    fontFamily: {
      'sans': ["Space Grotesk", "sans-serif"],
      'mono': ["Space Mono", "monospace"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      green: {
        200: "#edf8f3",
        600: "#009f4f",
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

