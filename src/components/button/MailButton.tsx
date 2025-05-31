import FloatingButton from "@/components/button/FloatingButton";
import MailIcon from "@/components/svg/MailIcon";

const MailButton = () => {
  return (
    <FloatingButton>
      <MailIcon className="w-6 h-6" />
    </FloatingButton>
  );
};

export default MailButton;
