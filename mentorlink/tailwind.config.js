/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#7c3aed',
        'brand-secondary': '#a78bfa',
        'brand-light': '#ede9fe',
      },
    },
  },
  plugins: [],
}