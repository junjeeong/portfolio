"use client";

import { useState } from "react";
import clsx from "clsx";
import MainCategory from "@/container/MainCategory";
import ArticleSection from "@/container/section/ArticleSection";
import EducationSection from "@/container/section/EducationSection";
import ProjectSection from "@/container/section/ProjectSection";
import { useInView } from "@/hook/useInView";

const MainSection = () => {
  const [isSelected, setIsSelected] = useState({
    project: true,
    education: false,
    article: false,
  });

  const { ref, isInView } = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleSelect = (el: "project" | "education" | "article") => {
    setIsSelected({
      project: false,
      education: false,
      article: false,
      [el]: true,
    });
  };

  return (
    <section className="relative flex items-center w-full gap-14 p-14 h-[1000px]">
      <MainCategory isSelected={isSelected} handleSelect={handleSelect} />

      <div
        className={clsx(
          "w-[1200px] flex-col flex transition-all duration-700 ease-out self-start",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40",
        )}
        ref={ref}
      >
        {isSelected.project && <ProjectSection />}
        {isSelected.education && <EducationSection />}
        {isSelected.article && <ArticleSection />}
      </div>
    </section>
  );
};

export default MainSection;
