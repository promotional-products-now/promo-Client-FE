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
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#020202",
        primary: "#0079C0",
        orange: "#FB853C",
        lightGreen: "#D5E7DB",
        lightBlue: "#84C9F2",
        yellow: "#FAB102",
        gray: "#4D4D4D",
        lightGray: "#D9D9D9",
        "white-bg": "#F8F8F8",
        "white-border": "#E9EBF3",
        gray1: "#F6F6F6",
        default: "",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}; 