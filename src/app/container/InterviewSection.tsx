import { comments } from "@/app/mock/interviewComment";
import CommentBox from "@/app/components/ui/CommentBox";

const InterviewSection = () => {
  return (
    <section className="">
      <h3 className="text-white font-blinker text-4xl">Interview</h3>
      <div className="flex flex-col mt-8 gap-6 text-white">
        {comments.map((el, idx) => (
          <CommentBox key={idx} question={el.question} answer={el.answer} />
        ))}
      </div>
    </section>
  );
};

export default InterviewSection;
