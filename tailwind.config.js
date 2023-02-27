/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],

      },
      container: {
        center: true,
      },
      spacing: {
        "92px": "92px",
        "124px": "124px",
      },
      margin: {
        "92px": "92px",
        "124px": "124px",
      },
    },

  },
  plugins: [],
}
