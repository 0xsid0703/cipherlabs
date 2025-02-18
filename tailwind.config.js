/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      backgroundColor: {
        'header': 'rgba(16, 24, 40, 0.25)',
        'primary': 'rgba(16, 24, 40, 1)',
        'v3-primary': '#232334',
        'secondary': '#12121A',
        'v3-secondary': '#171722',
        'dropdown': '#1C1C28',
        'chart-tooltip': '#303040',
        'header-bar': '#303044'
      },
      borderColor: {
        'primary': '#454258',
        'header': '#1D2939'
      },
      borderRadius: {
        '2md': '10px'
      },
      textColor: {
        'primary': '#EAECF0',
        'secondary': '#FCFCFD',
        'v3-primary': '#C3C2D4',
        'v3-secondary': '#f7f7f7',
        'accent': '#D0D5DD',
        'green': '#1ADEC6',
        'footer': '#98A2B3',
        'skeleton': '#6F6E84',
        'v3-white': '#F2F4F7',
        'v3-gray': 'rgba(255, 255, 255, 0.55)'
      },
      boxShadow: {
        'small': '0px 0px 100px 0px #000'
      },
      width: {
        '330': '330px',
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',

        'layout': '200px minmax(900px, 1fr) 100px',
      },
      scale: {
        '133': '1.333333333333',
        '166': '1.666666666666'
      }
    },
  },
  plugins: [],
}