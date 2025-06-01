"use client";

import { useState } from "react";
import Image from "next/image";
import SkillsCommentBox from "@/components/SkillsCommentBox";

const SkillsItem = ({ logo }: { logo: { name: string; url: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleHover = (skill: string) => {
    setIsOpen(true);
    setHoveredSkill(skill);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
    setHoveredSkill(null);
  };

  return (
    <figure
      className="bg-black w-[54px] h-[50px] rounded-2xl flex justify-center items-center shake-scale-hover relative"
      onMouseEnter={() => handleHover(logo.name)}
      onMouseLeave={handleMouseOut}
    >
      <Image src={logo.url} width={28} height={28} alt={logo.name} />
      {isOpen && hoveredSkill && <SkillsCommentBox skill={hoveredSkill} />}
    </figure>
  );
};

export default SkillsItem;
