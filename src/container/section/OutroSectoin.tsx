const OutroSectoin = () => {
  return (
    <section className="flex flex-col items-center w-screen h-screen">
      <div className="bg-[url('/image/background.jpg')] bg-cover pointer-events-none" />

      <h2 className="relative flex flex-col items-center mt-12 text-black ">
        <span className="text-6xl lg:text-[140px] font-[600] font-blinker text-white md:text-8xl">
          Thank You
        </span>
        <span className="block text-2xl font-light md:text-3xl lg:text-6xl">
          봐주셔서 감사합니다.
        </span>
      </h2>
    </section>
  );
};

export default OutroSectoin;
