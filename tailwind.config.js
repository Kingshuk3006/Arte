module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   // 'brown': '#F9DBB3',
    //   // white: '#FFFFFF',
    //   // black: '#0E0404',
    // },
    extend: {
      backgroundImage: {
        herobg: "url('/images/herobg.jpg')",
        articlebg: "url('/images/Articlebg.svg')",
        nearyoubg: "url('/images/nearyoubg.svg')",
        carouselbg: "url('/images/border.svg')",
        referencesbg: "url('/images/referencesbg.svg')",
        tutorialbg: "url('/images/tutorialbg.svg')",
        artworkbg: "url('/images/artworkbg.svg')",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    function({addVariant}) {
      addVariant ('child', '& > *');
      addVariant ('child-hover', '& > *:hover');
    },
  ],
};
