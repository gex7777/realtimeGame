// import konstaConfig config
const konstaConfig = require("konsta/config");

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'class'
  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: "#007aff",
    },
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
});
