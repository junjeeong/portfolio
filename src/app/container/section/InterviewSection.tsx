import CommentBox from "@/app/components/CommentBox";

const InterviewSection = () => {
  const comments = [
    {
      question: "Q. 왜 개발자가 되고 싶었나요?",
      answer: `노트북 하나만 있으면 어디서든 내가 원하는 걸 만들 수 있고, 그렇게 만든 서비스가 누군가의 일상에 작은 편리함을 줄 수 있다는 점이 큰 매력으로 다가왔습니다.`,
    },
    {
      question: "Q. 본인의 강점은 무엇인가요?",
      answer: `제 강점은 효용성을 중시하는 비판적 사고입니다. 기능을 멋지게 구현하는 것보다, 사용자가 만족하고 다시 사용할지에 더 큰 가치를 둡니다. 실제로 GA4 데이터 태깅을 통한 사용자 움직임 분석과 설문조사를 통해 불펺사항을 개선한 경험이 있습니다.`,
    },
    {
      question: "Q. 작업할 때 가장 중요하게 생각하는 부분이 있나요?",
      answer:
        "사용하는 기술스택에 대한 이해도인 것 같습니다. 단순히 많이 써서가 아니라, 왜 이 기술이어야 했는지, 어떤 장점이 실제 프로젝트에 기여했는지를 고민하며 선택합니다. 그렇게 해야 개발의 생산성과 퀄리티 모두 자연스럽게 올라간다고 믿습니다.",
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
