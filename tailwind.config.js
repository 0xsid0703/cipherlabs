/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'body-bgcolor': '#12121A',
        'tab-color': '#6F6E84',
        'tab-active-color': '#C3C2D4',
        'dropdown-content-hover': '#1C1C28',
        'chart-tooltip-color': '#303044',
        'grey-weak': '#454258',
        'grey-thick': '#232334',
        'grey-text': '#f7f7f7',
      },
      backgroundColor: {
        'header': 'rgba(16, 24, 40, 0.25)',
        'primary': 'rgba(16, 24, 40, 1)'
      },
      borderColor: {
        'header': '#1D2939'
      },
      textColor: {
        'primary': '#EAECF0',
        'secondary': '#FCFCFD',
        'accent': '#D0D5DD',
        'green': '#1ADEC6',
        'footer': '#98A2B3',
      },
      width: {
        '330': '330px',
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',

        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

