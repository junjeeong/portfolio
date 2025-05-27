const FloatingButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-full bg-white w-[50px] h-[50px] flex justify-center items-center hover:bg-black hover:text-white transition-colors duration-300">
      {children}
    </button>
  );
};

export default FloatingButton;
