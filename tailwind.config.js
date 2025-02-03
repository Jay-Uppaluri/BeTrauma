/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DB4537',
        secondary: '#FF6FAC',
        background: '#FFFFFF',
        yellow: '#E79F4D',
        dark: '#000000',
        accent: '#AD9D9D',
      },
    },
  },
  plugins: [],
};
