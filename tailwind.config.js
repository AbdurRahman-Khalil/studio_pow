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
        "about-img": "url('./src/LandingPage/main/images/about_image.webp')",
        "newsletter-img": "url('./src/LandingPage/main/images/newsletter_image.webp')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

