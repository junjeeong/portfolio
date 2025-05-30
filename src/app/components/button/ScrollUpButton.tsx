import FloatingButton from "@/app/components/button/FloatingButton";
import ArrowUpIcon from "@/app/components/svg/ArrowUpIcon";

const ScrollUpButton = () => {
  return (
    <FloatingButton>
      <ArrowUpIcon className="w-6 h-6" />
    </FloatingButton>
  );
};

export default ScrollUpButton;
