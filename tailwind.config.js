/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  // content: {},
  theme: {fontFamily: {
    sans: 'Roboto',
    title: 'Montserrat',
    },
    extend: {
        colors: {
            'main':{
                red:'#BD3124',
                white:'#EFF1F3',
                gray: '#4F4F4F',
                lightred: '#F6DADE',
                lightgray: '#F2F2F3',
            }
        }
    }
  },
  plugins: [],
}
