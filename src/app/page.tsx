import Header from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import Background from "@/app/components/layout/Background";

export default function Home() {
  return (
    <>
      <section className="z-0 sticky top-0 flex items-center flex-col w-screen h-screen">
        {/* 배경 레이어 */}
        <Background />
        {/* 콘텐츠 레이어 */}
        <Header />
        <HeroSection />
      </section>

      <section className="bg-[#232323] h-[2400px] w-screen z-10 relative "></section>
    </>
  );
}
