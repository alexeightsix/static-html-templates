/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("img/hero.jpg")',
        'search': 'url("img/search-banner.jpg"), url("img/search-banner.jpg")'
      },
      gridTemplateColumns: {
        'featured': 'repeat(7, minmax(300px, 300px))',
      }

    },
  },
  plugins: [],
}
