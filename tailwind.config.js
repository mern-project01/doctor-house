/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      primary: "#0FCFEC",
      secondary: "#19D3AE",
      thirdary: "#FF0033",
      Quaternary: "#838995",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};