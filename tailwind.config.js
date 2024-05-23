/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(58,11,88,1) 0%, rgba(53,12,80,1) 5%, rgba(164,53,240,1) 100%)',
      },
    },
  },
  plugins: [],
}