import Image from "next/image";
import ProjectTag from "@/app/components/ProjectTag";

interface ProjectCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({
  imageUrl,
  title,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <article className="w-[340px] h-[360px] bg-[#323232] p-5 flex flex-col rounded-[4px] ga-4">
      {imageUrl && (
        <figure className="w-full h-[40%] flex items-center justify-center rounded-md">
          <Image src={imageUrl} width={280} height={140} alt={title} />
        </figure>
      )}
      <h3 className="mt-2 text-2xl text-white font-extralight font-blinker">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-[#a6a6a6]">{description}</p>
      <div className="flex gap-2">
        {tags.map((el, index) => (
          <ProjectTag key={index} tag={el} />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
