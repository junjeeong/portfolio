"use client";

import { useState } from "react";
import NoticeIsEmpty from "@/components/NoticeIsEmpty";
import ProjectCard from "@/components/ProjectCard";
import ContentTypeFilter from "@/components/button/ContentTypeFilter";
import { allProjectDeatilInfo } from "@/mock/all-project-detail-info";
import { soloProjectDeatilInfo } from "@/mock/solo-project-deatil-info";
import { teamProjectDeatilInfo } from "@/mock/team-project-deatil-info";

const ProjectSection = () => {
  const [projectType, setProjectType] = useState<"all" | "single" | "team">(
    "all",
  );
  const [projectList, setProjectList] = useState<string[]>(
    Object.keys(allProjectDeatilInfo),
  );
  const projectIsExist = projectList.length > 0;

  const selectProjectType = (type: "all" | "single" | "team") => {
    switch (type) {
      case "all":
        setProjectType("all");
        setProjectList(Object.keys(allProjectDeatilInfo) || []);
        break;
      case "single":
        setProjectType("single");
        setProjectList(Object.keys(soloProjectDeatilInfo) || []);
        break;
      case "team":
        setProjectType("team");
        setProjectList(Object.keys(teamProjectDeatilInfo) || []);
        break;
      default:
        break;
    }
  };

  return (
    <section className="fadein-fast">
      <ContentTypeFilter
        currentType={projectType}
        handleSelect={selectProjectType}
      />
      {projectIsExist ? (
        <div className="grid grid-cols-3 mt-8 gap-y-8 justify-items-center">
          {projectList.map((el, index) => (
            <ProjectCard key={index} {...allProjectDeatilInfo[el]} />
          ))}
        </div>
      ) : (
        <NoticeIsEmpty />
      )}
    </section>
  );
};

export default ProjectSection;
