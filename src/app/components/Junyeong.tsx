import Image from "next/image";

const Junyeong = () => {
  return (
    <figure className="absolute bottom-0 flex justify-center fadein-profile w-screen max-w-[500px] h-[400px]">
      <Image
        src={"/image/정준영_흑백2.png"}
        fill
        alt="정준영 이미지"
      />
    </figure>
  );
};

export default Junyeong;
