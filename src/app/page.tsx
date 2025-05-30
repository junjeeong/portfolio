import IntroSection from "@/app/container/section/IntroSection";
import SummarySection from "@/app/container/section/SummarySection";
import MainSection from "@/app/container/section/MainSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <div className="bg-[#232323] h-[2400px] w-screen z-10">
        <SummarySection />
        <MainSection />
      </div>
      {/* <Educations />
      <Articles /> */}
    </>
  );
}
