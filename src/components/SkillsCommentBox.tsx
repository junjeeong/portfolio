import clsx from "clsx";
import { skillTechnicDetails } from "@/mock/skill-technic-details";

const SkillsCommentBox = ({ skill }: { skill: string }) => {
  const content: string[] = skillTechnicDetails[skill];

  const isMobileRightItems = ["javascript", "next", "jotai"].includes(skill);

  return (
    <div
      className={clsx(
        "absolute p-4 bg-[#323232] rounded-lg shadow-md w-[250px] h-[170px] -right-[200px] -top-[180px] z-10 ",
        isMobileRightItems ? "right-0" : "",
      )}
    >
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
