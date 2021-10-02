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
      black : colors.black,
      white : colors.white,
      blue : {
        '100':'',
        '200' : '#7C7CFF'
      },
      teal :{
        '500':'#4D747D',
        '900' : '#052A31'
      },
      'indigo':colors.indigo,
      gray : {
        '50':'#D1D1D1',
        '100':'#F4F4F4',
        '200' : '#E8E8E8',
        '300' : '#707070',
        '400' :'#656565',
        '500' : '#6E6E6E',
        '600' : '#F5F5F5',
        '700' : '#BFBFBF'
      }
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
      'sms':['16px', '42px'],
      'md' : ['20px','28px'],
      'base' : ['30px', '42px'],
      'lg' : ['50px', '62px'],
      'xl' : ['80px', '85px']
    },
    extend: {
      backgroundImage: {
       'technology': "url('~/static/img/Home/technology-card.png')",
       'partnership': "url('~/static/img/Home/partnerships-card.png')",
       'analytics' : "url('~/static/img/Home/analytics-card.png')"
      }
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: []
}