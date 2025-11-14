export default {
  plugins: {
    tailwindcss: {
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
    },
    autoprefixer: {},
  },
}