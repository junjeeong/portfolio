// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pre: ["Pretendard, sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        blinker: ["Blinker", "sans-serif"],
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "1024px" },
        lg: { max: "1536px" },
        xl: { min: "1546px" },
      },
    },
  },
  plugins: [],
};
