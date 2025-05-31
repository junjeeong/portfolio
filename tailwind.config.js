// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pre: ["Pretendard, sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        blinker: ["Blinker", "sans-serif"],
      },
      screens: {
        xs: { min: "320px", max: "374px" },
        sm: { min: "375px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
