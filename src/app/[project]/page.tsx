import { type FC } from "react";
import ProjectTag from "@/components/ProjectTag";
import ShowDetailButton from "@/components/button/ShowDetailButton";
import { teamProjectDeatilInfo } from "@/mock/team-project-deatil-info";

interface PageProps {
  params: {
    project: string;
  };
}

export interface ProjectInfo {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  members: string;
  themeColor: string;
  features: string[];
  stacks: {
    [key: string]: string;
  };
  troubles: {
    [key: number]: {
      problem: string;
      progress: string;
      result: string;
    };
  };
}

const ProjectPage: FC<PageProps> = async ({ params }) => {
  const { project } = params;

  const info: ProjectInfo = teamProjectDeatilInfo[project];

  const {
    title,
    description,
    tags,
    duration,
    members,
    themeColor,
    features,
    stacks,
    troubles,
  } = info;

  console.log("가져온 info", info);

  return (
    <article className="w-[80vw] h-[900px] flex flex-col items-center font-pre">
      <section
        className="w-full h-[173px] flex flex-col items-center gap-4 p-5 bg-opacity-70"
        style={{ backgroundColor: themeColor }}
      >
        <div className="flex gap-2">
          {tags.map((el, idx) => (
            <ProjectTag key={idx} tag={el} />
          ))}
        </div>
        <h1 className="text-5xl font-semibold text-white font-white font-blinker">
          {title}
        </h1>
        <p className="flex text-xs text-white lg:gap-4 sm:flex-col sm:items-center ">
          <span>{duration}</span>
          <span>{members}</span>
        </p>
      </section>

      <section className="flex flex-col max-w-[900px] flex-1 w-full h-auto p-16 bg-white font-light text-lg sm:text-sm">
        <section className="flex flex-col whitespace-pre-line">
          <p className="self-center text-center ">{description}</p>

          {/* divider */}
          <div className="w-full my-10 border" />
        </section>

        <div className="flex flex-col gap-10">
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold ">🧑‍💻 주요 기능</h2>
            <p className="text-base font-light sm:text-sm">
              {features.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold ">🛠️ 기술 스택</h2>
            <ul className="text-base font-light">
              {Object.keys(stacks).map((stack, index) => (
                <li key={index} className="mt-1">
                  <ShowDetailButton
                    mode="stacks"
                    title={stack}
                    content={stacks[stack]}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold ">✨ 기여한 작업</h2>
            <p>
              <ul>
               
              </ul>
            </p>
          </section> */}

          <section className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold ">🚀 Trouble Shooting</h2>
            <ul>
              {Object.keys(troubles).map((trouble, index) => (
                <li key={index}>
                  <ShowDetailButton
                    mode="shootings"
                    title={trouble}
                    content={troubles[trouble]}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </article>
  );
};

export default ProjectPage;
