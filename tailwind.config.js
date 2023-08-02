/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#21232e",
        primary: "#046e4d",
        secondary: "#034e3a",
        inputBg: "#16191E",
        inputPlaceholder: "#D5D5D5",
        inputBord: "#464645",
    },
  },
  },
  plugins: [],
}
