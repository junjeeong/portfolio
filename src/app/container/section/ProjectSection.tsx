import ProjectCard from "@/app/components/ProjectCard";

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
    <section className="grid grid-cols-3 gap-4 mt-8">
      {list.map((el, index) => (
        <ProjectCard key={index} {...el} />
      ))}
    </section>
  );
};

export default ProjectSection;
