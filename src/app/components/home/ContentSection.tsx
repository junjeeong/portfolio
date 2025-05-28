import IntroBadge from "@/app/container/IntroBadge";

const ContentSection = () => {
  return (
    <section className="bg-[#232323] h-[2400px] w-screen z-10 relative ">
      <h2 className="absolute top-7 left-7 text-white text-7xl font-bold font-blinker">
        About me
      </h2>
      <IntroBadge />
    </section>
  );
};

export default ContentSection;
