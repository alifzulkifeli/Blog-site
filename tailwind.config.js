module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        "lblue":"#78d6d1"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
