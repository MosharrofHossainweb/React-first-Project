/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandcolr': '#C51605',
        'secondaryColor':'#333333',
      },
    },
    container: {
      center: true,
      padding: {
        xl: '170px',
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      ptSerif: ["PT Serif", "serif"],
    },
  },
  plugins: [],
}
