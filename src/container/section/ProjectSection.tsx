import ProjectCard from "@/components/ProjectCard";
import ContentTypeFilter from "@/components/button/ContentTypeFilter";
import { projectDeatilInfo } from "@/mock/project-deatil-info";

const ProjectSection = () => {
  const projectList = Object.keys(projectDeatilInfo);
  console.log("리스트?", projectList);

  return (
    <section className="fadein-fast">
      <ContentTypeFilter />
      <div className="grid grid-cols-3 mt-8 gap-y-8 justify-items-center">
        {projectList.map((el, index) => (
          <ProjectCard key={index} {...projectDeatilInfo[el]} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
