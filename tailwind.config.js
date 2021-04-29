module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class',

  theme: {
    extend: {
      colors: {
        blue: {
          650: "#007991",
        },
        green: {
          650: "#81B214",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
