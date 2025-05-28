import Navigation from "@/app/components/home/Navigation";
import JeongJunyeong from "@/app/components/home/ProfilfeImage";
import Title from "@/app/components/home/Title";
import Background from "@/app/components/layout/Background";
import ArrowDown from "@/app/components/svg/ArrowDown";

const HeroSection = () => {
  return (
    <>
      <section className="z-0 sticky top-0 flex items-center flex-col w-screen h-screen">
        {/* 배경 레이어 */}
        <Background />
        {/* 콘텐츠 레이어 */}
        <Navigation />
        <Title />
        <figure className="absolute bottom-0 flex w-screen justify-center fadein-profile">
          <JeongJunyeong />
        </figure>
        <ArrowDown className="text-white absolute bottom-0 left-[48%] -translate-x-1/3 fadein-bounce w-16 h-16" />
      </section>
    </>
  );
};

export default HeroSection;
