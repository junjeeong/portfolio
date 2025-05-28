import InterviewSection from "@/app/container/InterviewSection";
import IntroBadge from "@/app/container/IntroBadge";

const ContentSection = () => {
  return (
    <section className="bg-[#232323] h-[2400px] w-screen z-10 relative flex justify-center">
      <div className="max-w-[900px] w-full flex flex-col gap-20">
        <h2 className="absolute top-7 left-7 text-white text-7xl font-bold font-blinker">
          About me
        </h2>
        <IntroBadge />
        <InterviewSection />
      </div>
    </section>
  );
};

export default ContentSection;
