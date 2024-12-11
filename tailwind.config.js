/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          "base-100": "#FFFFFF"
        },

      }
    ]
  },
  theme: {
    // colors: {
    //   praim: "#0FCFEC",
    //   second: "#19D3AE",
    //   third: "#3A4256",
    //   fourth: "#838995",
    //   gradiantColorSecond: "#838995",
    //   gradiantColorFirst: "#0FCFEC",
    // },
    fontFamily: { Sans: ["Open Sans", "sans - serif"] },
    extend: {},
  },
  plugins: [require("daisyui")],
};
