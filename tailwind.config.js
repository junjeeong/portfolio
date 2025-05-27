// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard, sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        geist: ["Geist", "sans-serif"],
        blinker: ["Blinker", "sans-serif"],
      },
    },
  },
  plugins: [],
};
