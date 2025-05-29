import Header from "@/app/components/home/Header";
import Junyeong from "@/app/components/home/Junyeong";
import Title from "@/app/components/home/Title";
import Background from "@/app/components/layout/Background";
import ArrowDown from "@/app/components/svg/ArrowDown";

const Intro = () => {
  return (
    <>
      <section className="sticky top-0 z-0 flex flex-col items-center w-screen h-screen">
        {/* 배경 레이어 */}
        <Background />
        {/* 콘텐츠 레이어 */}
        <Header />
        <Title />
        <Junyeong />
        <ArrowDown />
      </section>
    </>
  );
};

export default Intro;
