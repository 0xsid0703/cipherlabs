/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#232334',
        'secondary': '#12121A',
        'dropdown': '#1C1C28',
        'chart-tooltip': '#1C1C28',
      },
      borderColor: {
        'primary': '#454258',
      },
      textColor: {
        'primary': '#C3C2D4',
        'secondary': '#f7f7f7',
        'accent': '#D0D5DD',
        'skeleton': '#6F6E84',
      },
      width: {
        '330': '330px',
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',

        'layout': '200px minmax(900px, 1fr) 100px',
      },
      scale: {
        '133': '1.333333333333',
        '166': '1.666666666666'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

