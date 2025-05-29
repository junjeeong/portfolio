const Title = () => {
  return (
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full h-[300px] center-to-up">
      <h2 className="relative flex flex-col items-center mt-10 text-black">
        <span className="text-[60px] lg:text-[120px] font-[900] font-blinker text-white fadein-up md:text-8xl">
          No UX, No business
        </span>

        <span className="block text-lg md:text-3xl fadein">
          프론트엔드 개발자 <strong>정준영</strong>입니다.
        </span>

        <span className="mt-auto text-sm text-center fadein">
          <span className="fadein-down">
            <strong className="text-[14.8px]">UX</strong> 없이는 비즈니스도 없다
            믿기에,
          </span>
          <br />
          <span className="fadein-down-delay">
            사용자의 불편을 끝까지{" "}
            <strong className="text-[14.8px]">추적</strong>
            하겠습니다.
          </span>
        </span>
      </h2>
    </div>
  );
};

export default Title;
