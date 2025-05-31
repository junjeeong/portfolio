const ContentTypeFilter = ({
  currentType,
  handleSelect,
}: {
  currentType: "all" | "single" | "team";
  handleSelect: (type: "all" | "single" | "team") => void;
}) => {
  const isSelectedStyle =
    "px-5 py-2 bg-white text-black rounded-full pointer-events-none";
  const notSelectedStyle =
    "px-5 py-2 bg-[#323232] text-white hover:rounded-full hover:bg-[#5a5a5a] tansition-all duration-200";

  return (
    <div className="w-[264px] h-[64px] px-3 py-4 rounded-full text-white  items-center flex gap-2 justify-around bg-[#323232]">
      <button
        className={currentType === "all" ? isSelectedStyle : notSelectedStyle}
        onClick={() => handleSelect("all")}
      >
        All
      </button>
      <button
        className={currentType === "team" ? isSelectedStyle : notSelectedStyle}
        onClick={() => handleSelect("team")}
      >
        Team
      </button>
      <button
        className={
          currentType === "single" ? isSelectedStyle : notSelectedStyle
        }
        onClick={() => handleSelect("single")}
      >
        Single
      </button>
    </div>
  );
};

export default ContentTypeFilter;
