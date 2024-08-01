/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pop-1': "url('../public/pop_1.jpeg')",
        'pop-2': "url('../public/pop_2.png')",
      },
    },
  },
  plugins: [],
}

