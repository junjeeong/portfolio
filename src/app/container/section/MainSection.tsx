"use client";

import { useState } from "react";
import clsx from "clsx";
import MainCategory from "@/app/container/MainCategory";
import ArticleSection from "@/app/container/section/ArticleSection";
import CareerSection from "@/app/container/section/CareerSection";
import ProjectSection from "@/app/container/section/ProjectSection";
import { useInView } from "@/app/hook/useInView";
import { projectInfoList } from "@/app/mock/project-info-list";

const Project = () => {
  const [isSelected, setIsSelected] = useState({
    project: true,
    career: false,
    article: false,
  });

  const { ref, isInView } = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  const handleSelect = (el: "project" | "career" | "article") => {
    setIsSelected({
      project: false,
      career: false,
      article: false,
      [el]: true,
    });
  };

  return (
    <section className="relative flex items-center w-full gap-14 p-14">
      <MainCategory isSelected={isSelected} handleSelect={handleSelect} />

      <div
        className={clsx(
          "w-[1200px] flex-col flex transition-all duration-700 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40",
        )}
        ref={ref}
      >
        {isSelected.project && <ProjectSection list={projectInfoList} />}
        {isSelected.career && <CareerSection />}
        {isSelected.article && <ArticleSection />}
      </div>
    </section>
  );
};

export default Project;
