/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(3, 3, 1, 0.9) ;',
        secondary: "#FDDD3D",
        dimBlack: "#1C1C1A",
        dimWhite: "#fff",
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