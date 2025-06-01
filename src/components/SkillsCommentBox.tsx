import { skillTechnicDetails } from "@/mock/skill-technic-details";

const SkillsCommentBox = ({ skill }: { skill: string }) => {
  const content: string[] = skillTechnicDetails[skill];

  return (
    <div className="absolute p-4 bg-[#323232] rounded-lg shadow-md w-[250px] h-[170px] -right-[230px] -top-[150px] z-10 ">
      <ul>
        {content.map((string, index) => (
          <li key={index} className="mt-2 text-xs text-[#a7a7a7]">
            • {string}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCommentBox;
