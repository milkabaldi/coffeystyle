/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#1D1F2E',
        secondary: "#fff",
        dimBrown: "#A25F4B",
        dimGrey: "rgba(29, 31, 46, 0.7)",
      },
      backgroundImage: {
        'mugs': "url('/src/assets/bg-coffeeMugs.jpg')",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  
  plugins: [],
};