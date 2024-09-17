/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#800080',
        'purple-text': '#FFC4FF',
        'bg-black': '#16161C',
        'gray-text': '#B4B4B4',
        'gray-text2': '#A0A0A0',
        'footer-text': '#8D8D8D',
        'footer-bg': '#272828',
      },
    },
  },
  plugins: [],
};
