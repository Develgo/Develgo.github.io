/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'develgo-blue': '#004f79',
        'develgo-light-blue': '#D8FCFA',
      },
      backgroundImage: {
        'hero-image': "url('/public/yellow_comic.jpg')",
      }
    },
  },
  plugins: [],
}

