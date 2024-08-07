// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".app/root.tsx",
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
        yellow: "#f8b106",
        gray: "#4D4D4D",
        lightGray: "#D9D9D9",
        "white-bg": "#F8F8F8",
        "white-border": "#E9EBF3",
        gray1: "#F6F6F6",
      },
      screens: {
        "3xl": "1600px",
        "4xl": "1760px",
        "5xl": "1920px",
        "6xl": "2080px",
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
          "3xl": "1500px",
          // "4xl": "1760px",
          // "5xl": "1920px",
          // "6xl": "2080px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
