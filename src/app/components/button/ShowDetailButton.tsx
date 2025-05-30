"use client";

import { useState } from "react";

const ShowDetailButton = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <button
      className="w-full h-[40px] flex items-center bg-[#efeff1] gap-1 hover:bg-[#efeff1b4] transition-colors duration-75"
      onClick={handleToggle}
    >
      <span>▶</span>
      <span className="text-base font-[500] font-blinker flex-1">{title}</span>
      {isOpen && (
        <p className="w-full px-3 py-2 text-base font-light">{content}</p>
      )}
    </button>
  );
};

export default ShowDetailButton;
