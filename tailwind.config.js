/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'poppin':'Poppins'
    },
    colors:{
      'primary':"#fffffe",
      'secondary':'#d1d1e9',
      'button':'#6246ea',
      'icon':'#e45858',
      'head':'#2b2c34',
    }
  },
  plugins: [],
}

