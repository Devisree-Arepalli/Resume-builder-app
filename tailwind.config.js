/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app//*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mintgreen: {
          600: '#3EB489',
        },
      },
    },
  },
  plugins: [],
}
