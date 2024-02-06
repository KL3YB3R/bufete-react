const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logoBlue: "url('/src/assets/img/logo-blue.png')",
        logoOrange: "url('/src/assets/img/logo-orange.png')",
        arrowWhite: "url('/src/assets/icons/arrow-white.png')",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        50: "50px",
        100: "100px",
      },
      colors: {
        blueWhite: "#117c8f",
        blue: "#07575b",
        blueDark: "#003b46",
        bgOrange: "#ffe4db",
        orange: "#ba5536",
        orangeWhite: "#fb7248",
        otherOrangeWhite: "#e04314",
      },
      width: {
        "11.5/12": "95%",
        128: "32rem",
      },
      height: {
        100: "28rem",
        102: "30rem",
        104: "32rem",
        128: "36rem",
      },
      lineHeight: {
        12: "45px",
      },
      boxShadow: {
        "3xl": "-4px 0px 10px 0px rgba(0, 0, 0, 0.5);",
      },
      borderRadius: {
        800: "800px",
      },
      fontSize: {
        15: "15px",
      },
      spacing: {
        18: "70px",
        26: "104px",
      },
      rotate: {
        60: "60deg",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});
