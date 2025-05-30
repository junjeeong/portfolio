import FloatingButton from "@/app/components/button/FloatingButton";
import PhoneIcon from "@/app/components/svg/PhoneIcon";

const CallButton = () => {
  return (
    <FloatingButton>
      <PhoneIcon className="w-6 h-6" />
    </FloatingButton>
  );
};

export default CallButton;
