import ArrowRightIcon from "@/components/svg/ArrowRightIcon";

interface GoResumeButtonProps {
  handleClick: () => void;
  handleHover: (ishover: boolean) => void;
}

const GoResumeButton = ({ handleClick, handleHover }: GoResumeButtonProps) => {
  return (
    <button
      onMouseOver={() => handleHover(true)}
      onMouseOut={() => handleHover(false)}
      onClick={handleClick}
      className="text-base font-pre font-semibold w-[180px] h-[44px] rounded-full bg-white border-black border-1 text-black flex items-center justify-around hover:ring-4 hover:ring-gray-200 hover:shadow-lg transition-all duration-200"
    >
      이력서 보러 가기
      <ArrowRightIcon className="w-6 h-6" />
    </button>
  );
};

export default GoResumeButton;
