/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-minus-20': 'calc(100vh - 80px)', // Custom class name
      },
    },
  },
  plugins: [],
}