// See https://tailwindcss.com/docs/configuration for details
const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend:{
      fontFamily: {
        body: ["Monstserrat", "sans-serif"],
      },
      
    },
    colors: {
      
      primary: {
        100: "#c5d1ff",
        200: "#9fb2ff",
        300: "#8ba2ff",
        400: "#6583ff",
        500: "#3e64ff",
        600: "#385ae6",
        700: "#2614f1",
        800: "#1f3280",
        900: "#131e4c",
      },
      maize: {
        500: "#FFBD59",
        700: "#FFAB00",
      },
      pending: "#CEB801",
      arrived: "#48BB78",
      expired: "#F56565",
      ...colors,
    },
    fontSize: {
      xxs: '.5rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },


  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
