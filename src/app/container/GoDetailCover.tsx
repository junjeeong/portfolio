import Link from "next/link";

const GoDetailCover = ({ projectName }: { projectName: string }) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full gap-8 rounded-md bg-inherit fadein-fast">
      <span className="text-3xl text-white text-blinker">{projectName}</span>
      <Link href={`/${projectName.toLocaleLowerCase()}`}>
        <button className="flex items-center justify-center px-20 py-4 text-white border border-white rounded-lg border-1 bg-inherit hover:text-black hover:bg-white ">
          자세히보기
        </button>
      </Link>
    </div>
  );
};

export default GoDetailCover;
