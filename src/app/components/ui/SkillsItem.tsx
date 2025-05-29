import Image from "next/image";

const SkillsItem = ({ logo }: { logo: { name: string; url: string } }) => {
  return (
    <figure className="bg-black w-[54px] h-[50px] rounded-2xl flex justify-center items-center">
      <Image src={logo.url} width={28} height={28} alt={logo.name} />
    </figure>
  );
};

export default SkillsItem;
