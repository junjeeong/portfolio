import CallButton from "@/components/button/CallButton";
import MailButton from "@/components/button/MailButton";
import ScrollUpButton from "@/components/button/ScrollUpButton";

const FloatingButtons = () => {
  return (
    <div className="w-[50px] h-auto fixed z-10 flex flex-col gap-3 bottom-4 right-4">
      <CallButton />
      <MailButton />
      <ScrollUpButton />
    </div>
  );
};

export default FloatingButtons;
