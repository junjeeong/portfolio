import ProjectTag from "@/app/components/ProjectTag";
import { projectInfoList } from "@/app/mock/project-info-list";

interface Params {
  project: string;
}

interface PrjectInfo {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  members: string;
  themeColor: string;
  features: string[];
  stacks: string[];
  troubles: {
    problem: string;
    progress: string;
    result: string;
  }[];
}

const ProjectPage = ({ params }: { params: Params }) => {
  const { project } = params;

  const info: PrjectInfo = projectInfoList.find(
    (el) => el.title.toLocaleLowerCase() === project,
  );

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
    <article className="w-[80vw] h-[900px] flex flex-col items-center">
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
        <p className="flex gap-4 text-xs text-white">
          <span>{duration}</span>
          <span>{members}</span>
        </p>
      </section>

      <section className="flex flex-col max-w-[900px] flex-1 w-full h-auto p-16 bg-white font-light text-lg">
        <section className="flex flex-col whitespace-pre-line">
          <p className="self-center text-center">{description}</p>

          {/* divider */}
          <div className="w-full my-10 border" />

          <h2 className="text-2xl">🧑‍💻 주요 기능</h2>
          <ul>
            {features.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl">🛠️ 기술 스택</h2>
          <p>
            {stacks.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </p>
        </section>
        <section className="flex flex-col">
          <h2 className="text-2xl">🚀 트러블 슈팅</h2>
          {troubles.map((el, index) => (
            <div key={index} className="mb-6">
              <h3 className="mt-4 font-semibold">어떤 문제가 있었는가?</h3>
              <p>{el.problem}</p>
              <h3 className="mt-4 font-semibold">어떻게 해결했는가?</h3>
              <p>{el.progress}</p>
              <h3 className="mt-4 font-semibold">어떤 결과를 얻었는가?</h3>
              <p>{el.result}</p>
            </div>
          ))}
        </section>
      </section>
    </article>
  );
};

export default ProjectPage;
