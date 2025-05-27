import FloatingButton from "@/app/components/button/FloatingButton";
import Phone from "@/app/components/svg/Phone";

const CallButton = () => {
  return (
    <FloatingButton>
      <Phone className="w-6 h-6" />
    </FloatingButton>
  );
};

export default CallButton;
