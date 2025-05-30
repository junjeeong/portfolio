const NavigationBar = () => {
  return (
    <div className="w-[264px] h-[64px] px-3 py-4 rounded-full text-white  items-center flex gap-2 justify-around bg-[#323232]">
      <button className="flex items-center justify-center px-5 py-2 text-black bg-white rounded-full">
        All
      </button>
      <button className="px-5 py-2 ">Team</button>
      <button className="px-5 py-2 ">Single</button>
    </div>
  );
};

export default NavigationBar;
