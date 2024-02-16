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
        primary: "#0079C0",
        secondary: "#FB853C",
        white: "#F8F8F8",
        light: "#D5E7DB",
        lightest: "#84C9F2",
        yellow: "#FAB102",
        dark: "#020202",
        grey: "#4D4D4D",
        meduim: "#E9EBF3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}; 

