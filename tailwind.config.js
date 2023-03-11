module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        pink_900: "#5f0c3e",
        pink_901: "#831946",
        red_200: "#d5b58c",
        red_400: "#c85656",
        green_A100: "#b3ffc4",
        pink_A700: "#cc0058",
        deep_purple_A200: "#9747ff",
        purple_302: "#b26eb4",
        purple_300: "#b26db3",
        purple_301: "#c062c8",
        gray_600: "#6e6e6e",
        gray_402: "#c0c0c0",
        gray_601: "#6f6f71",
        gray_400: "#c7b296",
        gray_401: "#d9ccbc",
        gray_802: "#6b3939",
        gray_803: "#505050",
        gray_800: "#615438",
        gray_602: "#767676",
        gray_801: "#5a3535",
        gray_200: "#eeeeee",
        white_A700: "#ffffff",
        red_303: "#dd8180",
        red_900: "#831919",
        red_300: "#cf8860",
        light_blue_600: "#009cde",
        red_301: "#d78585",
        red_302: "#d8807f",
        gray_50: "#fafafa",
        red_100: "#f2cece",
        red_50: "#fdf1f3",
        black_900: "#000000",
        green_400_dd: "#60cf78dd",
        pink_A400: "#e90b5a",
        black_901: "#110e0e",
        gray_900_a2: "#222222a2",
        yellow_900: "#f26b1c",
        gray_905: "#071b28",
        gray_906: "#18181b",
        gray_903: "#521b1b",
        deep_orange_401: "#f47d3a",
        gray_904: "#281906",
        deep_orange_400: "#f47d39",
        purple_401: "#b75e93",
        purple_400: "#b65e93",
        gray_700: "#666666",
        lime_400: "#c6cf60",
        gray_500: "#af8471",
        gray_901: "#092a10",
        gray_902: "#400e2c",
        white_A700_a2: "#ffffffa2",
        gray_900: "#222222",
        white_A700_a8: "#ffffffa8",
        bluegray_100: "#d9d9d9",
        gray_300: "#e6e6e6",
        orange_100: "#efd7b3",
        gray_100: "#f6f6f6",
        bluegray_900: "#363636",
        cyan_300: "#60c8cf",
        bluegray_101: "#cccccc",
        teal_900_26: "#17494d26",
        indigo_900: "#003087",
        indigo_901: "#012169",
        bluegray_901: "#303533",
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        arial: "Arial",
        plusjakartasans: "Plus Jakarta Sans",
        montserrat: "Montserrat",
        segoeui: "Segoe UI",
      },
      boxShadow: { bs: "0px 20px  30px 0px #17494d26" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
