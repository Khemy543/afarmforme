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
      gray : "707070",
      black : colors.black,
      white : colors.white
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: []
}