const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['var(--font-audiowide)'],
        kaushan: ['var(--font-kaushan)']
      }
    },
  },
  plugins: [],
});
