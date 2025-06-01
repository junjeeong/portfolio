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
        sm: { min: "360px", max: "819px" },
        md: { min: "820px", max: "1199px" },
        lg: { min: "1200px" },
      },
    },
  },
  plugins: [],
};
