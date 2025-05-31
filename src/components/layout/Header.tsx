import Link from "next/link";

const Header = () => {
  const commonStyle =
    "py-1 px-2 border-b-2 border-b-black hover:bg-black transition-colors duration-500 hover:text-white";

  return (
    <div className="fixed top-0 z-10 flex w-screen gap-5 p-6 fadein-delay">
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
    </div>
  );
};

export default Header;
