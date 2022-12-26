/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'background-stars': "url('../public/assets/stars.svg')",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    
    },
  },
  plugins: [],
}
