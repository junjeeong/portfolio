import ProjectTypeFilter from "@/app/components/button/ProjectTypeFilter";
import ProjectCard from "@/app/components/ProjectCard";

const Project = () => {
  const projectContent = [
    {
      imageUrl: "",
      title: "Mbtips",
      description: "",
      tags: ["팀", "반응형 웹", "AI 생성형 챗봇"],
    },
    {
      imageUrl: "",
      title: "Albaform",
      description: "",
      tags: ["팀", "반응형 웹", "긱시크"],
    },
    {
      imageUrl: "",
      title: "Wikied",
      description: "",
      tags: ["팀", "반응형 웹"],
    },
    {
      imageUrl: "",
      title: "Linkbrary",
      description: "",
      tags: ["팀", "반응형 웹"],
    },
  ];

  return (
    <section className="relative flex items-center w-full gap-14 p-14">
      <div className="flex flex-col self-start gap-4">
        <h2 className="font-bold text-white text-7xl font-blinker">Project</h2>
        <h2 className="font-bold text-white text-7xl font-blinker">Career</h2>
        <h2 className="font-bold text-white text-7xl font-blinker">Article</h2>
      </div>

      <div className="w-[1200px] flex-col flex">
        <ProjectTypeFilter />
        <section className="grid grid-cols-3 gap-4 mt-8">
          {projectContent.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Project;
