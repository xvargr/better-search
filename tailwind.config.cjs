/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBack: "#ffffff",
        darkBack: "#303134",
        lightText: "000000de",
        darkText: "#e8eaed",
        googleRed: "#ea4335",
        googleGreen: "#34a853",
        googleBlue: "#4285f4",
        googleYellow: "#fbbc05",
      },
      boxShadow: {
        sides: "0 4px 6px rgba(32,33,36,.28)",
      },
    },
  },
  plugins: [],
};
