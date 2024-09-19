/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#f7f7fb",
        "text-color": "#ECECEC",
        theme: "#0A64BC",
        "secondary-theme": "#085FB48F",
        "secondary-theme": "#4585EF",
        "blue-light": "#E7F0FF",
        "green-light": "#00FF380F",
        "green-lighter": "#EBF9F5",
        "green-dark": "#03AD28",
      },
    },
  },
  plugins: [],
};
