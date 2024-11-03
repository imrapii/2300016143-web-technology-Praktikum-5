/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
          'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
          'biru': '#2D76F9'
      },
      theme: {
          fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
          }
      },
      spacing: {
          '100px': '100px',
          '1440px': '1440px',
          '99px': '99px',
          '700px': '700px',
          '850px': '850px'
      },
      padding: {
        '533px': '533px',
        '255px': '255px'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}