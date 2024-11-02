/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily:{
        'Volkhov': ['Volkhov'],
        'Popins': ["Poppins", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/Decore.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

