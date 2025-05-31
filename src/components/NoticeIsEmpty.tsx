import Image from "next/image";

const NoticeIsEmpty = () => {
  return (
    <figure className="flex flex-col items-center w-full gap-4">
      <Image
        src="/image/sad.png"
        width={400}
        height={400}
        alt="not-found logo"
      />
      <figcaption className="text-4xl font-bold text-white">
        아직 구현한 프로젝트가 없습니다...ㅜ
      </figcaption>
    </figure>
  );
};

export default NoticeIsEmpty;
