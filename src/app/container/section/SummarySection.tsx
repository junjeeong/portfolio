import Skills from "@/app/components/Skills";
import MemojiBadge from "@/app/container/MemojiBadge";
import InterviewSection from "@/app/container/section/InterviewSection";

const SummarySection = () => {
  return (
    <section className="relative flex flex-col items-center w-full p-14">
      <div className="max-w-[900px] w-full flex flex-col gap-20 mt-14">
        <h2 className="absolute font-semibold text-white text-7xl font-blinker left-14 top-14">
          About Me
        </h2>
        <MemojiBadge />
        <InterviewSection />
        <Skills />
      </div>
    </section>
  );
};

export default SummarySection;
