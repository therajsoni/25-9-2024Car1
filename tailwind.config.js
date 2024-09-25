/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
        loginFormColor : "rgba(0,0,0,0.75)",
        inputFormColor : "#333"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
