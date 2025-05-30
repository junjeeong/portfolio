"use client";

import { useState } from "react";
import { useInView } from "@/app/hook/useInView";
import { projectInfoList } from "@/app/mock/project-info-list";
import clsx from "clsx";
import MainCategory from "@/app/container/MainCategory";
import ProjectSection from "@/app/container/section/ProjectSection";
import ArticleSection from "@/app/container/section/ArticleSection";
import CareerSection from "@/app/container/section/CareerSection";
import ContentTypeFilter from "@/app/components/button/ContentTypeFilter";

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
    <section
      className={clsx(
        "relative flex items-center w-full gap-14 p-14 transition-all duration-1000 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"
      )}
      ref={ref}
    >
      <MainCategory isSelected={isSelected} handleSelect={handleSelect} />

      <div className="w-[1200px] flex-col flex">
        <ContentTypeFilter />
        {isSelected.project && <ProjectSection list={projectInfoList} />}
        {isSelected.career && <CareerSection />}
        {isSelected.article && <ArticleSection />}
      </div>
    </section>
  );
};

export default Project;
