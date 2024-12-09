/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "#0FCFEC",
      second: "#19D3AE",
      third: "#3A4256",
      fourth: "#838995",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

