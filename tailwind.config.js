/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.js', './src/component/Navbar.jsx', './src/pages/About.jsx', './src/pages/Home.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Poppins', 'sans-serif'],
        sharpie: ['Sharpie', 'sans-serif'],
        telma: ['Telma', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Add your font here
      },
    },
    screens: {
      xs: '380px',
      sm: '540px',
      md: '720px',
      lg: '920px',
      xl: '1040px',
    }
  },
  plugins: [],
}
