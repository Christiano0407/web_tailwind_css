/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-s": "320px",
        "mobile-m": "375px", 
        "mobile-l":"425px", 
      }
    },
    colors: {
      "clr-White": "#f2f2f2",
      "primary": "#44AFF2", 
      "secondary": "#F20F79",
      "third": "#F2913D",
      "primary-dark": "#138AF2", 
      "primary-light": "#04ADBF", 
    }
  },
  plugins: [],
}
/* S-320, M-375, L-425, */
