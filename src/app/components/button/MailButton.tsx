import FloatingButton from "@/app/components/button/FloatingButton";
import MailIcon from "@/app/components/svg/MailIcon";

const MailButton = () => {
  return (
    <FloatingButton>
      <MailIcon className="w-6 h-6" />
    </FloatingButton>
  );
};

export default MailButton;
