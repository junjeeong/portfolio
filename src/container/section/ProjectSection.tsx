"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ContentTypeFilter from "@/components/button/ContentTypeFilter";
import { teamProjectDeatilInfo } from "@/mock/team-project-deatil-info";

// import { singleProjectDeatilInfo } from "@/mock/single-project-deatil-info";

const ProjectSection = () => {
  const [projectType, setProjectType] = useState<"all" | "single" | "team">(
    "all",
  );
  // const isTeamProject = projectType === "team";

  const teamPrjectList = Object.keys(teamProjectDeatilInfo);
  // const singleProjectList = Object.keys(singleProjectDeatilInfo);

  const selectProjectType = (type: "all" | "single" | "team") => {
    switch (type) {
      case "all":
        setProjectType("all");
        break;
      case "single":
        setProjectType("single");
        break;
      case "team":
        setProjectType("team");
        break;
      default:
        setProjectType("all");
    }
  };

  return (
    <section className="fadein-fast">
      <ContentTypeFilter
        currentType={projectType}
        handleSelect={selectProjectType}
      />
      <div className="grid grid-cols-3 mt-8 gap-y-8 justify-items-center">
        {teamPrjectList.map((el, index) => (
          <ProjectCard key={index} {...teamProjectDeatilInfo[el]} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
