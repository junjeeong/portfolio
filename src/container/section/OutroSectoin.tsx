const OutroSectoin = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen bg-[url('/image/background.jpg')] bg-cover">
      <h2 className="relative flex flex-col items-center text-black ">
        <span className="text-6xl lg:text-[140px] font-[600] font-blinker text-white md:text-8xl">
          Thank You
        </span>
        <span className="block text-2xl font-extralight font-pre md:text-3xl lg:text-6xl">
          감사합니다.
        </span>
        <p className="fixed text-sm font-bold text-gray-500 bottom-2 right-2">
          Designed by <a href="https://github.com/jieun419">@JiEun</a>
        </p>
      </h2>
    </section>
  );
};

export default OutroSectoin;
