import SkillsItem from "@/components/SkillsItem";

const Skills = () => {
  const stack = [
    { name: "html", url: "/icon/html.svg" },
    { name: "css", url: "/icon/css.svg" },
    { name: "javascript", url: "/icon/javascript.svg" },
    { name: "typescript", url: "/icon/typescript.svg" },
    { name: "react", url: "/icon/react.svg" },
    { name: "next", url: "/icon/next.png" },
    { name: "tailwind", url: "/icon/tailwind-css.svg" },
    { name: "zustand", url: "/icon/zustand.svg" },
    { name: "jotai", url: "/icon/jotai.png" },
    { name: "tanstackQuery", url: "/icon/react-query.svg" },
    { name: "githubActions", url: "/icon/github.svg" },
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="self-start text-4xl text-white text-blinker">Skills</h3>
      <div className="w-[500px] sm:w-[280px]  grid sm:grid-rows-3 sm:grid-cols-3 grid-rows-2 grid-cols-6 gap-y-4 mt-8">
        {stack.map((el, index) => (
          <SkillsItem key={index} logo={el} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
