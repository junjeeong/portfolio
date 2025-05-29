import Skills from "@/app/components/home/Skills";
import InterviewSection from "@/app/container/InterviewSection";
import MemojiBadge from "@/app/container/MemojiBadge";

const AboutMe = () => {
  return (
    <section className="bg-[#232323] h-[2400px] w-screen z-10 relative flex justify-center">
      <div className="max-w-[900px] w-full flex flex-col gap-20 ">
        <MemojiBadge />
        <InterviewSection />
        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
