import ProjectCard from "@/app/components/ProjectCard";
import ContentTypeFilter from "@/app/components/button/ContentTypeFilter";

const ProjectSection = ({
  list,
}: {
  list: {
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
  }[];
}) => {
  return (
    <section className="fadein-fast">
      <ContentTypeFilter />
      <div className="grid grid-cols-3 mt-8 gap-y-8 justify-items-center">
        {list.map((el, index) => (
          <ProjectCard key={index} {...el} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
