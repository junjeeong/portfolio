import NavigationBar from "@/app/components/button/NavigationBar";
import ProjectCard from "@/app/components/ProjectCard";

const Project = () => {
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
    <section className="relative flex items-center w-full gap-14 p-14">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-white text-7xl font-blinker">Project</h2>
        <h2 className="font-bold text-white text-7xl font-blinker">Career</h2>
        <h2 className="font-bold text-white text-7xl font-blinker">Article</h2>
      </div>

      <div className="w-[1200px] flex-col flex">
        <NavigationBar />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
