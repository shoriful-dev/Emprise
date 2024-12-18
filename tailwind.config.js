/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px'
      },
      backgroundImage: {
        'bannerImage': "url('/src/assets/banner.png')",
      },
    },
  },
  plugins: [],
}
