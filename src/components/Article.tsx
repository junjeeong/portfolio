import Link from "next/link";

const Article = ({ href, title, description }) => {
  return (
    <Link href={href} target="_blank">
      <article className="w-full sm:w-[calc(100vw-64px)] sm:h-[300px] h-[150px] bg-[#323232] rounded-[4px] flex gap-4 p-4 hover:bg-[#747474]">
        <div className="flex flex-col gap-4 p-2">
          <h2 className="text-3xl text-white">{title}</h2>
          <p className="text-sm text-[#a6a6a6]">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default Article;
