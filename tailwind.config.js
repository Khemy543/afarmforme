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
    extend: {
      colors: {
        primary: "#206E00",
        secondary : "#D6D6D6",
        black : colors.black,
        white : colors.white,
        blue : {
          '100':'',
          '200' : '#7C7CFF',
          '300':'#656CE0'
        },
        teal :{
          '500':'#4D747D',
          '900' : '#052A31'
        },
        'indigo':colors.indigo,
        gray : {
          'normal': '#EAEAEA',
          '50':'#D1D1D1',
          '100':'#F4F4F4',
          '200' : '#E8E8E8',
          '300' : '#707070',
          '400' :'#656565',
          '500' : '#6E6E6E',
          '600' : '#F5F5F5',
          '700' : '#BFBFBF'
        },
        green:{
          "500" : '#1E5F04',
          "600":'#206E00',
          "700": '#319F86'
        },
        red:{
          "500":'#B50000'
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
        'sm' : ['16px'],
        'sms':['16px', '42px'],
        'md' : ['20px','28px'],
        'base' : ['30px', '42px'],
        'lg' : ['50px', '62px'],
        'xl' : ['80px', '85px']
      },
      backgroundImage: {
       'technology': "url('~/static/img/Home/technology-card.png')",
       'partnership': "url('~/static/img/Home/partnerships-card.png')",
       'analytics' : "url('~/static/img/Home/analytics-card.png')",
       'become-a-partner' : "url('~/static/img/Home/become-a-partner-bg.svg')",
       'footer-banner': "url('~/static/img/Footer/footer-banner-bg.svg')",
       'get-started' : "url('~/static/img/Packages/ready-to-get-started-bg.svg')"
      }
    }
  },
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: []
}
