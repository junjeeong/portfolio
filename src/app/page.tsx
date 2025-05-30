import AboutMe from "@/app/components/home/AboutMe";
import Intro from "@/app/components/home/Intro";
import Project from "@/app/container/Project";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="bg-[#232323] h-[2400px] w-screen z-10">
        <AboutMe />
        <Project />
      </div>
      {/* <Educations />
      <Articles /> */}
    </>
  );
}
