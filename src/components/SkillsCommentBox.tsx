import { skillTechnicDetails } from "@/mock/skill-technic-details";

const SkillsCommentBox = ({ skill }: { skill: string }) => {
  const content: string[] = skillTechnicDetails[skill];

  return (
    <div className="absolute p-4 bg-[#323232] rounded-lg shadow-md w-[250px] h-[170px] -right-[200px] -top-[180px] z-10 before:content-[''] before:absolute before:-bottom-2 before:left-6 before:border-[10px] before:border-transparent before:border-t-[#323232]">
      <ul>
        {content.map((string, index) => (
          <li key={index} className="mt-2 text-xs text-[#a7a7a7]">
            • {string}
          </li>
        ))}
        <div className="absolute left-3 bottom-0 translate-x-[-50%] translate-y-[50%] border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#323232]" />
      </ul>
    </div>
  );
};

export default SkillsCommentBox;
