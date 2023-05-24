/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
