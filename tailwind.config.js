/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        darkBg: "#121212",
        purpleCard: "#7B61FF",
        yellowAccent: "#FFD700",
      },
    },
  },
  plugins: [],
};
