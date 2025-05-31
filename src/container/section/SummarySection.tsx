"use client";

import clsx from "clsx";
import Skills from "@/components/Skills";
import MemojiBadge from "@/container/MemojiBadge";
import InterviewSection from "@/container/section/InterviewSection";
import { useInView } from "@/hook/useInView";

const SummarySection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section className="relative w-full">
      {/* 고정된 About Me 텍스트 */}
      <h2 className="absolute z-10 font-semibold text-white text-7xl font-blinker left-14 top-14">
        About Me
      </h2>

      {/* 아래에 애니메이션 적용된 내용 */}
      <div
        ref={ref}
        className={clsx(
          "flex flex-col items-center w-full p-14 transition-all duration-1000 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40",
        )}
      >
        <div className="max-w-[900px] w-full flex flex-col gap-20 mt-14">
          <MemojiBadge />
          <InterviewSection />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
