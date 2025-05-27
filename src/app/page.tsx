import Header from "@/app/components/header/Header";
import JeongJunyeong from "@/app/components/home/ProfilfeImage";
import Title from "@/app/components/home/Title";
import ArrowDown from "@/app/components/svg/ArrowDown";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative bg-[url('/image/background.jpg')] bg-cover z-0 sticky top-0 flex flex-col w-screen h-screen">
        <Title />
        <figure className="flex w-screen justify-center">
          <JeongJunyeong />
        </figure>
        <ArrowDown className="text-white absolute bottom-0 left-[48%] -translate-x-1/3 animate-bounce w-16 h-14" />
      </section>

      <section className="bg-[#232323] h-[2400px] w-screen z-10 relative "></section>
    </>
  );
}
