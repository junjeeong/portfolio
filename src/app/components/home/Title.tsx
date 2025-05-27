const Title = () => {
  return (
    <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full h-[400px] items-center center-to-up mt-5">
      <h2 className="relative text-[46px] text-black fadein">
        프론트엔드 개발자 <strong>정준영</strong>
        입니다.
        <span className="min-w-[1400px] absolute -top-24 -left-[15%] text-8xl font-blinker font-semibold text-white fadein-up">
          No UX, No business
        </span>
      </h2>
    </div>
  );
};

export default Title;
