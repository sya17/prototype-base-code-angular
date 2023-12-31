/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#1e88e5",
        secondcolor: "#1d891a",
        darkcolor: "#222b45",
        lightcolor: "#ffffff",
        textcolor: "#073b4c",
        graycolor: "#eef5f9",
        gray2color: "#ecf0f6",

        infobuttoncolor: "#60afff",
        primarybuttoncolor: "#215ebe",
        warningbuttoncolor: "#ffa500",
        successbuttoncolor: "#1d891a",
        dangerbuttoncolor: "#ce3a27",
        disablecolor: "#949395",
      },
    },
  },
  plugins: [],
};
