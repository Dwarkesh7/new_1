/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a237e",
        secondary: "#0d47a1",
        accent: "#2962ff",
        background: "#f5f5f5",
        surface: "#ffffff",
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
} 