import { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'auto': 'auto',
      },
      colors: {
        dark: {
          background: '#18191a',
        },
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;