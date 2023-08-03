/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Bitter'],
      'rrlogo': ['Permanent Marker'],
      'backcountry': [`'Baloo Chettan 2', cursive`],
      'lavlink': ['Dosis,sans-serif'],
      'funkyflix': ['Passion One, cursive']
    },
    colors: {
      'darkBlue': '#001524',
      'teal': '#15616D',
      'beige': '#FFECD1',
      'orange': '#FF7D00',
      'aqua': '#34F6F2'
    },
    screens: {
      'sm': '450px',
      'md': '700px',
      'lg': '1180px',
      'xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
}
