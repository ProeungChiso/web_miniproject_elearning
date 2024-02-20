/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme:{
    extend: {
      colors:{
        'custom-blue': '#0F2167',
      },
      fontFamily: {
        roboto: ['roboto'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

