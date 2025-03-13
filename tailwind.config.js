const colors = require("@tailwindcss/postcss7-compat/colors");

module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors  : {
          'black-grey': '#31352B',
        },
      },
    },
    plugins: [],
  }
  