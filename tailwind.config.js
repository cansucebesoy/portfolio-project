/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Comic Sans"],
        PlayfairDisplay: ["Playfair Display", "Comic Sans"],
      },
    },
  },
  plugins: [],
};
