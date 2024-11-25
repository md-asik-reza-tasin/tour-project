/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display1: "Bungee Spice, sans-serif",
        display2: "Montserrat, sans-serif",  // Adds a new `font-display` class
        display3: "Bebas Neue, sans-serif",
        display4: "Bebas Neue, serif" 
      }
    },
  },
  plugins: [require("daisyui")],
};
