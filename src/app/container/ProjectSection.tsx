import NavigationBar from "@/app/components/project/NavigationBar";
import ProjectCard from "@/app/components/project/ProjectCard";

const ProjectSection = () => {
  const projectContent = [
    {
      imageUrl: "",
      name: "Mbtips",
      description: "",
      tag: ["팀", "반응형 웹", "AI 생성형 챗봇"],
    },
    {
      imageUrl: "",
      name: "Albaform",
      description: "",
      tag: ["팀", "반응형 웹", "긱시크"],
    },
    {
      imageUrl: "",
      name: "Wikied",
      description: "",
      tag: ["팀", "반응형 웹"],
    },
    {
      imageUrl: "",
      name: "Linkbrary",
      description: "",
      tag: ["팀", "반응형 웹"],
    },
  ];
  return (
    <section>
      <h2 className="text-7xl text-white font-blinker font-bold sticky top-0 left">
        Project
      </h2>
      <NavigationBar />
      <ProjectCard />
    </section>
  );
};

export default ProjectSection;
