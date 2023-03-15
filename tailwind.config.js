/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Bitter']
    },
    colors: {
      'darkBlue': '#001524',
      'teal': '#15616D',
      'beige': '#FFECD1',
      'orange': '#FF7D00',
      'aqua': '#34F6F2'
    },
    extend: {},
  },
  plugins: [],
}
