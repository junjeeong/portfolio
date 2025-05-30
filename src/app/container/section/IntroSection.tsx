import Header from "@/app/components/layout/Header";
import Title from "@/app/components/home/Title";
import Background from "@/app/components/layout/Background";
import ArrowDownIcon from "@/app/components/svg/ArrowDownIcon";
import Junyeong from "@/app/components/ui/Junyeong";

const IntroSection = () => {
  return (
    <>
      <section className="sticky top-0 z-0 flex flex-col items-center w-screen h-screen">
        {/* 배경 레이어 */}
        <Background />
        {/* 콘텐츠 레이어 */}
        <Header />
        <Title />
        <Junyeong />
        <ArrowDownIcon />
      </section>
    </>
  );
};

export default IntroSection;
