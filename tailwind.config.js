/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1597E4',
        'primary-500': '#2191d3',
        'error':'#D86161'
      },
      gridTemplateColumns: ['responsive'],
    },
  },
  plugins: [],
}