/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/html/home.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
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
      "clr-black": "#333",
      "primary": "#44AFF2", 
      "secondary": "#F20F79",
      "third": "#F2913D",
      "primary-dark": "#138AF2", 
      "primary-light": "#04ADBF", 
      "clr-blueExtra": "#6374ae",
    }
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
    layerOrder: ['utilities', 'components', 'utilities'],
  },
}
