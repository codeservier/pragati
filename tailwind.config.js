/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c5270",
        secondary: "#0081a7",
        mywhite: "#fff",
        myblack: "#3A3A5E",
      },
      fontFamily: {
        sans: ["'Open Sans'"],
      },
    },
  },
  plugins: [],
};
