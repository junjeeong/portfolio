import IntroSection from "@/container/section/IntroSection";
import MainSection from "@/container/section/MainSection";
import SummarySection from "@/container/section/SummarySection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <div className="bg-[#232323] h-auto w-screen z-10">
        <SummarySection />
        <MainSection />
      </div>
      {/* <Educations />
      <Articles /> */}
    </>
  );
}
