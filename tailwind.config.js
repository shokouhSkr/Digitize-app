/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Vazir"],
        iranyekan: ["iranyekan"],
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
      screens: {
        "2xs": "375px",
        xs: "425px",
        x: "532px",
        sm: "640px",
        md: "768px",
        lg: "900px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
      },
      // keyframes: {
      //   slide: {
      //     "0%": { height: 0 },
      //     "100%": { height: 96 },
      //   },
      //   animation: {
      //     slide: "slide 3s ease-in-out",
      //   },
      // },
    },
  },
  plugins: [],
};
