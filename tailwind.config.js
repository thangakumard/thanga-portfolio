/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            lighthover: '#fcf4ff',
        },
        fontFamily: {
            Outfit: ['Outfit', 'sans-serif'],
            Ovo: ['Ovo', 'serif'],
        },
        boxShadow: {
            'black': '4px 4px 0 #000000',
            'white': '4px 4px 0 #FFFFFF',
        },
        gridTemplateColumns: {
            'auto': 'repeat(auto-fit, minmax(250px, 1fr))',
        },
    },
  },
  plugins: [],
};
