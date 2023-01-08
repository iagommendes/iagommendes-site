/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Mono"],
        serif: ["IBM Plex Mono"],
        mono: ["IBM Plex Mono"],
        display: ["IBM Plex Monoe"],
        body: ["IBM Plex Mono"],
      },
    },
  },
  plugins: [],
}
