/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        buttonColorDark: "rgba(51, 51, 51, 0.5)",
        buttonColorRed: "#e50914",
        darkGray: "#282c2d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
