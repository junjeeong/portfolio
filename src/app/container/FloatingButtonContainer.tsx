import CallButton from "@/app/components/button/CallButton";
import MailButton from "@/app/components/button/MailButton";
import ScrollUpButton from "@/app/components/button/ScrollUpButton";

const FloatingButtonContainer = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      <CallButton />
      <MailButton />
      <ScrollUpButton />
    </div>
  );
};

export default FloatingButtonContainer;
