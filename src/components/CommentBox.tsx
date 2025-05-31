import { ReactNode } from "react";

interface CommentBoxProps {
  question: string;
  answer: ReactNode;
}

const CommentBox = ({ question, answer }: CommentBoxProps) => {
  return (
    <div className="bg-[#373737] rounded-l-2xl rounded-tr-2xl w-full sm:h-[250px] h-[176px] p-5 text-lg">
      <h4 className="text-2xl sm:text-xl">{question}</h4>
      <p
        className="mt-4 text-xs leading-6 lg:text-base"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default CommentBox;
