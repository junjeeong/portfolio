import Link from "next/link";

const Navigation = () => {
  const commonStyle =
    "py-1 px-2 border-b-2 border-b-black hover:bg-black transition-colors duration-500 hover:text-white";

  return (
    <div className="fixed top-0 z-10 flex gap-5 p-6 w-screen max-w-[1400px] fadein-delay">
      <Link
        href={"https://github.com/junjeeong"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={commonStyle}>Github</span>
      </Link>

      <Link
        href={"https://velog.io/@wn8624"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={commonStyle}>Velog</span>
      </Link>

      <Link
        href={
          "https://woolen-scissor-0a1.notion.site/junjeong-1ff200834c4a807e9896c084531c542f?pvs=74"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <span className={commonStyle}>Resume</span>
      </Link>
    </div>
  );
};

export default Navigation;
