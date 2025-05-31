import Image from "next/image";

const Junyeong = () => {
  return (
    <figure className="absolute bottom-0 flex justify-center fadein-profile w-screen max-w-[500px] h-[400px]">
      <Image
        src={"/image/junyeong2.png"}
        fill
        alt="정준영 이미지"
        className="fadein-delay"
      />

      <span className="absolute w-full sm:text-[clamp(14px,2vw,28px)] font-light text-center -translate-x-1/2 -top-20 left-1/2 lg:text-lg fadein">
        <span className="fadein-down">UX 없이는 비즈니스도 없다 믿기에,</span>
        <br />
        <span className="fadein-down-delay">
          사용자의 불편을 끝까지 추적 하겠습니다.
        </span>
      </span>
    </figure>
  );
};

export default Junyeong;
