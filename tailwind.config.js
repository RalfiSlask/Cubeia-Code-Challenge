/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBG: '#07001A',
        secondaryBG: '#130D25',
        primaryButton: '#B91B5D',
        primaryButtonHover: '#A84970',
        selectorBG: '#2A253A',
        selectorBGHover: '#4c4368',
        selectorActive: '#1BB96B',
        selectorActiveHover: '#1BB96B',
        special: '#B98D1B',
      },
    },
  },
  plugins: [],
};
