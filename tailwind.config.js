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
      width: {
        '330': '330px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

