module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(270deg, rgba(205,205,205,1) 5%, rgba(219,207,28,1) 20%, rgba(203,70,16,1) 55%, rgba(0,0,0,1) 95%)',
      },
      colors: {
        'primary': '#d97706',  // Colore arancione
        'dark': '#1c1c1e',     // Colore nero
      },
    },
  },
  plugins: [],
}
