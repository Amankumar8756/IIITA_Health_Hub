/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important for React files
  ],
  theme: {
    extend: {
      colors:{
        'primary':" bg-cyan-500"
      },
      gridTemplateColumns:{
        'auto' :'repeat(auto-fill, minmax(200px, 1fr)'
      }
    },
  },
  plugins: [],
}
