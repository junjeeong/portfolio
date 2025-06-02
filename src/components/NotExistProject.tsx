import Image from "next/image";

const NotExistProject = () => {
  return (
    <div className="flex flex-col items-center sm:mt-20 sm:h-screen">
      <figure className="relative items-center w-[400px] h-[400px] gap-4">
        <Image
          src="/image/sad.jpeg"
          fill
          className="object-cover"
          alt="not-found logo"
        />
      </figure>
      <span className="text-4xl font-bold text-white sm:text-xl h-28">
        아직 구현한 프로젝트가 없습니다...ㅜ
      </span>
    </div>
  );
};

export default NotExistProject;
