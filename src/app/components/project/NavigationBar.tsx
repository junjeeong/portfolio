const NavigationBar = () => {
  return (
    <div className="w-[270px] h-[64px] rounded-full text-white  items-center flex justify-around">
      <button className="py-2 px-5 bg-white text-black rounded-full flex justify-center items-center">
        All
      </button>
      <button>Team</button>
      <button>Single</button>
    </div>
  );
};

export default NavigationBar;
