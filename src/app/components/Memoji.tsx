import HashTag from "@/app/components/ui/HashTag";
import Image from "next/image";

const Memoji = ({ resumeButtonIsHover }: { resumeButtonIsHover: boolean }) => {
  return (
    <figure className="flex flex-col items-center gap-1">
      <Image
        src={resumeButtonIsHover ? "/image/memoji.png" : "/image/memoji2.png"}
        width={460}
        height={460}
        alt="정준영 미모지"
      />
      <HashTag />
    </figure>
  );
};

export default Memoji;
