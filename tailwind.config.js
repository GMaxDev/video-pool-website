/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#101418",
        "dark-color": "#2B5255",
        "light-color-1": "#1CDC92",
        "light-color-2": "#51C1AB",
        "light-color-3": "#CAFFF3",
      },
    },
  },
  plugins: [],
};
