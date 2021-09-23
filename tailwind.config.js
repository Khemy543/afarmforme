/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge:["./**/*.html", "./**/*.vue"],
  theme: {
    colors: {
      primary: "#206E00",
      secondary : "#D6D6D6",
      gray : colors.gray,
      black : colors.black,
      white : colors.white,
      blue : colors.blue,
      'indigo':colors.indigo,
    },
    fontFamily : {
      'proxima-nova' : ['Proxima Nova']
    },
    fontSize : {
      'small':['12px', '42px'],
      'xxs' : ['14px', '18px'],
      'xs' : ['15px', '22px'],
      'xsm': ['16px', '18px'],
      'sm' : ['16px', '55px'],
      'md' : ['20px','28px'],
      'base' : ['30px', '42px'],
      'lg' : ['50px', '62px'],
      'xl' : ['80px', '85px']
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: []
}