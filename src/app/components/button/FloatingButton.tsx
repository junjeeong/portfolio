const FloatingButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-full bg-white w-[50px] h-[50px] flex justify-center items-center">
      {children}
    </button>
  );
};

export default FloatingButton;
