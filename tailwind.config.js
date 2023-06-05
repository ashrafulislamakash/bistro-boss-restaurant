/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      dark1: "#151515",
      dark2: "#444444",
      dark3: "#737373",
      dark4: "#A2A2A2",
      dark5: "#D0D0D0",
      dark6: "#E8E8E8",
      dark7: "#F3F3F3",
      red: "#FF3811",
      darkred: "#D82805",
      yellow: "#EEFF25",
      darkGeen: "#287855",
      green: "#80E2B7",
      darkgold: "#AE7B2B",
      gold: "#D1A054",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        cover1: "url('/src/assets/menu/banner3.jpg')",
      },
    },
  },
  plugins: [],
};
