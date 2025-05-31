import CommentBox from "@/components/CommentBox";

const InterviewSection = () => {
  const comments = [
    {
      question: "Q. 왜 개발자가 되고 싶었나요?",
      answer: `기술이 일상 깊숙이 스며든 현 시대에, 컴퓨터와 소통하며 문제를 해결할 수 있는 사람이 가장 필요한 인재라고 생각했습니다. 아이디어를 실제 서비스로 만들고 사람들에게 <b>편의를 주는 개발자</b>가 되고 싶었습니다. 그런 점에서 제가 상상한 것을 현실로 구현하고, 사람들에게 편의를 제공할 수 있다는 점에 큰 매력을 느껴 개발자가 되기로 결심했습니다.`,
    },
    {
      question: "Q. 본인의 강점은 무엇인가요?",
      answer: `제 강점은 <b>효용성을 중시하는 비판적 사고</b>입니다. 기능을 멋지게 구현하는 것보다, 사용자가 만족하고 다시 사용할지에 더 큰 가치를 둡니다. 실제로 GA4 데이터 태깅을 통한 사용자 움직임 분석과 설문조사를 통해 불펺사항을 개선한 경험이 있습니다.`,
    },
    {
      question: "Q. 작업할 때 가장 중요하게 생각하는 부분이 있나요?",
      answer:
        "<b>사용하는 기술 스택에 대한 깊은 이해도</b>를 가장 중요하게 생각합니다. 단순히 많이 사용하기 때문이 아닌, 왜 이 기술이어야 하는지, 이 기술이 프로젝트에 어떤 가치를 더하는지를 충분히 고민합니다. 이런 태도가 개발의 생산성과 완성도를 자연스럽게 높여준다고 믿습니다.",
    },
  ];

  return (
    <section>
      <h3 className="text-4xl text-white font-blinker">Interview</h3>
      <div className="flex flex-col gap-6 mt-8 text-white">
        {comments.map((el, idx) => (
          <CommentBox key={idx} question={el.question} answer={el.answer} />
        ))}
      </div>
    </section>
  );
};

export default InterviewSection;
