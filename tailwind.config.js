/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandcolr': '#C51605'
      },
    },
    container: {
      center: true,
      padding: {
        lg: '177px',
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      ptSerif: ["PT Serif", "serif"],
    },
  },
  plugins: [],
}
