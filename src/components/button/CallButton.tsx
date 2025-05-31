import FloatingButton from "@/components/button/FloatingButton";
import PhoneIcon from "@/components/svg/PhoneIcon";

const CallButton = () => {
  return (
    <FloatingButton>
      <PhoneIcon className="w-6 h-6" />
    </FloatingButton>
  );
};

export default CallButton;
