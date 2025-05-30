import IntroSection from "@/app/container/section/IntroSection";
import MainSection from "@/app/container/section/MainSection";
import SummarySection from "@/app/container/section/SummarySection";

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
