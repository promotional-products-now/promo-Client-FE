// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0079C0",
        whitewhite: "#FFFFFF",
        yellow: "#FAB102",
        orange: "#FB853C",
        lightblue: "#84C9F2",
        backgroundgray: "#F8F8F8",
        titletext: "#020202",
        textcolor: "#4D4D4D",
        bordercolor: "#E9EBF3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
