/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
      },
      backgroundImage:{
        'background-stars': "url('../public/assets/stars.svg')",
      },
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
      }
    
    },
  },
  plugins: [],
}
