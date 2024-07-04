/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*'],
  theme: {
    extend: {
      screens : {
        lap : {min : '1100px'},
        tab : {max : '1000px'},
        mob : {max : '767px'}
      }
    },
  },
  plugins: [],
}

