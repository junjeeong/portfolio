import FloatingButton from "@/app/components/button/FloatingButton";
import Mail from "@/app/components/svg/Mail";

const MailButton = () => {
  return (
    <FloatingButton>
      <Mail className="w-6 h-6" />
    </FloatingButton>
  );
};

export default MailButton;
