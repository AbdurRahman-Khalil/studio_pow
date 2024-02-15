/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "hero-img": "url('./src/LandingPage/main/images/hero_image.webp')",
        "about-img": "url('./src/LandingPage/main/images/about_image.webp')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

