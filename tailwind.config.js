/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.md", "./content/**/*.md", "./layouts/*.html", "./layouts/**/*.html", "./public/*.html", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

