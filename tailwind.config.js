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
      inherit: 'inherit',
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
        700: "#078244",
      },
    },
    extend: {
      boxShadow: {
        'smooth20': '0px 0.6px 0.8px rgba(0, 0, 0, 0.014), 0px 1.3px 2px rgba(0, 0, 0, 0.02), 0px 2.5px 3.8px rgba(0, 0, 0, 0.025), 0px 4.5px 6.7px rgba(0, 0, 0, 0.03), 0px 8.4px 12.5px rgba(0, 0, 0, 0.036), 0px 20px 30px rgba(0, 0, 0, 0.05)',
        'smooth40': '0px 1.1px 1.1px rgba(0, 0, 0, 0.014), 0px 2.7px 2.7px rgba(0, 0, 0, 0.02), 0px 5px 5px rgba(0, 0, 0, 0.025), 0px 8.9px 8.9px rgba(0, 0, 0, 0.03), 0px 16.7px 16.7px rgba(0, 0, 0, 0.036), 0px 40px 40px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

