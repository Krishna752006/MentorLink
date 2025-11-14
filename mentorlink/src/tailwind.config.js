/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./**/*.{js,jsx}",
    "!./**/node_modules/**",
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