import ProjectTag from "@/app/components/ProjectTag";
import Image from "next/image";

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
    <article className="w-[320px] h-[360px] bg-[#323232] p-5 flex flex-col rounded-[4px] ga-4">
      {imageUrl && (
        <figure className="w-100% h-[45%]">
          <Image src={imageUrl} fill className="object-cover" alt={title} />
        </figure>
      )}
      <h3 className="text-2xl text-white font-extralight font-blinker">
        {title}
      </h3>
      <p className="flex-1">{description}</p>
      <div className="flex gap-2">
        {tags.map((el, index) => (
          <ProjectTag key={index} tag={el} />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
