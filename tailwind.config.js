export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ['"Chivo"', ...fontFamily.sans],
        spectral: ['"Spectral"', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
