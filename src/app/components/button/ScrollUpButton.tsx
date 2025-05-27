import FloatingButton from "@/app/components/button/FloatingButton";
import ArrowUp from "@/app/components/svg/ArrowUp";

const ScrollUpButton = () => {
  return (
    <FloatingButton>
      <ArrowUp className="w-6 h-6" />
    </FloatingButton>
  );
};

export default ScrollUpButton;
