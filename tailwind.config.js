const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./**/*.html'],
  theme: {
    fontFamily: {
      "spartan": ['Spartan',...fontFamily.sans ]
    },
    fontSize:{
      "big": "3rem",
      "large": "2rem",
      "medium": "0.9375rem",
      "small": "0.8125rem"
    },
    extend: {
      maxWidth:{
        "max-viewport-w":"1200px"
      },
      colors:{
        "dark-purple": {
          "100":"#F7F2F7",
          "200": "#927B91",
          "300": "#EE69A4",
          "400": "#512051"

        }
      }
    },
    screens: {
      'x-small': "20rem",
      "small": "23.4375rem",
      "medium": "48rem",
      "large": "64rem",
      "x-large": "90rem",
      "xx-large": "120rem"
    },
    container: {
      center: true,
      padding: '1.5rem'
    }
  },
  variants: {},
  plugins: [],
}
