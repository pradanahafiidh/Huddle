/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "18px",
    },
    extend: {
      color: {
        primary :"#083344",
        secondary: "#db2777"
      },
      screens:{
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

