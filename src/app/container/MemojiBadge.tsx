"use client";

import { useState } from "react";
import GoResumeButton from "@/app/components/home/GoResumeButton";
import Memoji from "@/app/components/ui/Memoji";

const MemojiBadge = () => {
  const [isHover, setIsHover] = useState(false);

  const openResume = () => {
    window.open(
      "https://woolen-scissor-0a1.notion.site/junjeong-1ff200834c4a807e9896c084531c542f",
      "_blank"
    );
  };

  const handleHover = (ishover: boolean) => {
    if (ishover) setIsHover(true);
    else setIsHover(false);
  };

  return (
    <article className="mx-auto flex flex-col gap-5 items-center w-full max-w-[1200px]">
      <Memoji resumeButtonIsHover={isHover} />
      <GoResumeButton handleClick={openResume} handleHover={handleHover} />
    </article>
  );
};

export default MemojiBadge;
