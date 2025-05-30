import SkillsItem from "@/app/components/ui/SkillsItem";

const Skills = () => {
  const stack = [
    { name: "html", url: "/icon/html.svg" },
    { name: "css", url: "/icon/css.svg" },
    { name: "javascript", url: "/icon/javascript.svg" },
    { name: "typescript", url: "/icon/typescript.svg" },
    { name: "react", url: "/icon/react.svg" },
    { name: "next", url: "/icon/next.png" },
    { name: "tailwind-css", url: "/icon/tailwind-css.svg" },
    { name: "zustand", url: "/icon/zustand.svg" },
    { name: "jotai", url: "/icon/jotai.png" },
    { name: "react-query", url: "/icon/react-query.svg" },
    { name: "github", url: "/icon/github.svg" },
  ];

  return (
    <div>
      <h3 className="text-4xl text-white text-blinker">Skills</h3>
      <div className="w-[500px] grid grid-rows-2 grid-cols-6 justify-items-center gap-y-4 mt-8">
        {stack.map((el, index) => (
          <SkillsItem key={index} logo={el} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
