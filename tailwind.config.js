/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#4ea948",
        "green-secondary": "#9b226f",
        "blue-primary": "#4682b4",
        "blue-secondary": "#ff8c00",
        "red-primary": "#de2741",
        "red-secondary": "#dfaa25",
        "brown-primary": "#f1ad6c",
        "brown-secondary": "#7d3f1e",
      },
      fontFamily: {
        offbit: ["OffBit", "sans-serif"],
        homevideo: ["HomeVideo", "sans-serif"],
        covid19: ["Covid19", "sans-serif"],
        pixeloidmono: ["PixeloidMono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
