import CallButton from "@/components/button/CallButton";
import MailButton from "@/components/button/MailButton";
import ScrollUpButton from "@/components/button/ScrollUpButton";

const FloatingButtons = () => {
  return (
    <div className="fixed z-50 flex flex-col gap-3 bottom-4 right-4">
      <CallButton />
      <MailButton />
      <ScrollUpButton />
    </div>
  );
};

export default FloatingButtons;
