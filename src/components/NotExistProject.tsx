const NotExistProject = () => {
  return (
    <div className="flex flex-col items-center sm:mt-20 sm:h-screen">
      <figure className="relative items-center gap-4">
        <img
          width={400}
          height={400}
          src="/image/sad.jpeg"
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
