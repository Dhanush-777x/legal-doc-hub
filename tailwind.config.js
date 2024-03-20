/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#dce4f8',
        background: '#010001',
        primary: '#91a8e8',
        secondary: '#321b7f',
        accent: '#7832d3',
        additional: "#0b0f20"
      },
    }
  },
  plugins: [],
}