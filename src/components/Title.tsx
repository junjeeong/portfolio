const Title = () => {
  return (
    <div className="absolute top-[45%] left-1/2 w-full h-[300px] flex gap-14 justify-center translate-x-[-50%] translate-y-[-50%] center-to-up">
      <h2 className="relative flex flex-col items-center mt-12 text-black ">
        <span className="text-6xl lg:text-[140px] font-[600] font-blinker text-white fadein-up md:text-8xl">
          No UX, No business
        </span>
        <span className="block text-2xl font-light md:text-3xl lg:text-6xl fadein">
          프론트엔드 개발자 <strong>정준영</strong>입니다.
        </span>
      </h2>
    </div>
  );
};

export default Title;
