const Title = () => {
  return (
    <div className="absolute top-[45%] left-1/2 w-full h-[300px] flex gap-14 justify-center translate-x-[-50%] translate-y-[-50%] center-to-up">
      <h2 className="relative flex flex-col text-black sm:mt-12 md:mt-20 ">
        <span className="sm:text-[clamp(46px,12vw,60px)] sm:mt-10 lg:text-[140px] font-[600] font-blinker text-white fadein-up md:text-8xl">
          No UX, No business
        </span>
        <span className="block sm:text-[clamp(20px,6vw,30px)] text-center font-extralight font-pre md:text-5xl lg:text-6xl fadein ">
          프론트엔드 개발자 <strong>정준영</strong>입니다.
        </span>
      </h2>
    </div>
  );
};

export default Title;
