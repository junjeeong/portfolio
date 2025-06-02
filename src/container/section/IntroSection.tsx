import Junyeong from "@/components/Junyeong";
import Title from "@/components/Title";
import Background from "@/components/layout/Background";
import Header from "@/components/layout/Header";
import ArrowDownIcon from "@/components/svg/ArrowDownIcon";

const IntroSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center w-screen h-screen sm:h-[calc(100vh-60px)]">
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
