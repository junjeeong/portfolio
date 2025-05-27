import Navigation from "@/app/components/Navigation";
import JeongJunyeong from "@/app/components/home/ProfilfeImage";
import Title from "@/app/components/home/Title";
import ArrowDown from "@/app/components/svg/ArrowDown";

const HeroSection = () => {
  return (
    <>
      <Navigation />
      <Title />
      <figure className="absolute bottom-0 flex w-screen justify-center fadein-profile">
        <JeongJunyeong />
      </figure>
      <ArrowDown className="text-white absolute bottom-0 left-[48%] -translate-x-1/3 fadein-bounce w-16 h-16" />
    </>
  );
};

export default HeroSection;
