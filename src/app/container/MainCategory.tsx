"use client";

import clsx from "clsx";

interface MainCategoryProps {
  isSelected: {
    project: boolean;
    career: boolean;
    article: boolean;
  };
  handleSelect: (el: "project" | "career" | "article") => void;
}
const MainCategory = ({ isSelected, handleSelect }: MainCategoryProps) => {
  const commonStyle =
    "font-bold text-7xl font-blinker cursor-pointer transition-colors duration-3000";

  return (
    <div className="flex flex-col self-start gap-4">
      <h2
        className={clsx(
          commonStyle,
          isSelected.project
            ? "text-white"
            : "text-[#373737] hover:text-[#747474]"
        )}
        onClick={() => handleSelect("project")}
      >
        Project
      </h2>
      <h2
        className={clsx(
          commonStyle,
          isSelected.career
            ? "text-white"
            : "text-[#373737] hover:text-[#747474]"
        )}
        onClick={() => handleSelect("career")}
      >
        Career
      </h2>
      <h2
        className={clsx(
          commonStyle,
          isSelected.article
            ? "text-white"
            : "text-[#373737] hover:text-[#747474]"
        )}
        onClick={() => handleSelect("article")}
      >
        Article
      </h2>
    </div>
  );
};

export default MainCategory;
