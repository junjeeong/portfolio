"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const ShowDetailButton = ({
  mode,
  title,
  content,
}: {
  mode?: "stacks" | "contributes" | "shootings";
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  themeColor?: string;
}) => {
  const modeIsShooting = mode === "shootings";
  const [isOpen, setIsOpen] = useState(mode !== "stacks" ? true : false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <button
        className="w-full h-[40px] flex items-center bg-[#efeff1] hover:bg-[#efeff1b4] gap-1 transition-colors duration-75 py-2 px-3"
        onClick={handleToggle}
      >
        <span className={modeIsShooting ? "text-sm " : "text-[8px]"}>
          {modeIsShooting ? "✨" : isOpen ? "▼" : "▶︎"}
        </span>
        <span
          className={clsx(
            "text-start text-base font-[500] font-blinker flex-1",
            modeIsShooting ? "sm:text-xs" : "",
          )}
        >
          {title}
        </span>
      </button>
      {isOpen &&
        (!modeIsShooting ? (
          <p className="w-full px-3 py-2 text-base font-light sm:text-sm">
            {content}
          </p>
        ) : (
          <>
            <p className="w-full px-3 py-2 text-base font-light sm:text-sm">
              <strong className="font-semibold">[문제]</strong>{" "}
              {content.problem}
            </p>
            <p className="w-full px-3 py-2 text-base font-light sm:text-sm">
              <strong className="font-semibold">[해결]</strong>{" "}
              {content.progress}
            </p>
            <p className="w-full px-3 py-2 text-base font-light sm:text-sm">
              <strong className="font-semibold">[결과]</strong> {content.result}
            </p>
            {content.link && (
              <p className="w-full px-3 py-2 mb-4 text-base font-light sm:text-sm hover:text-green-200">
                <Link
                  className="font-semibold"
                  href={content.link}
                  target="_blank"
                >
                  회고록 보러 가기
                </Link>
              </p>
            )}
          </>
        ))}
    </>
  );
};

export default ShowDetailButton;
