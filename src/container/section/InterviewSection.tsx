import CommentBox from "@/components/CommentBox";

const InterviewSection = () => {
  const comments = [
    {
      question: "Q. 왜 개발자가 되고 싶었나요?",
      answer: `IT 기술이 일상 깊숙이 자리 잡은 지금, 컴퓨터와 소통할 줄 아는 사람이야말로 사람들이 가장 필요로 하는 인재라고 생각했습니다. 노트북 하나만 있으면 공간의 제약 없이 나만의 아이디어를 실제 서비스로 만들 수 있다는 점, 그리고 그것으로 사람들에게 편의를 제공할 수 있다는 점이 큰 매력으로 다가왔습니다.`,
    },
    {
      question: "Q. 본인의 강점은 무엇인가요?",
      answer: `저는 사소한 것도 놓치지 않는 <b>예민함</b>이 강점입니다.예를 들어, 함수 하나를 만들 때에도 이름만 보고 기능이 바로 이해되도록 고민하고, 디렉토리 구조나 파일 위치도 쉽게 찾을 수 있도록 신중하게 설계하려고 합니다. 또한 로직을 짤 때 단순히 동작만 되게 쓰기보다는, 다른 개발자들도 쉽게 이해할 수 있도록 가독성 높고 독립적이게 작성하려 노력합니다.
이런 태도들은 협업에서 큰 시너지를 만든다고 생각합니다.`,

      // `제 강점은 <b>효용성을 중시하는 비판적 사고</b>입니다. 기능을 멋지게 구현하는 것보다, 사용자가 만족하고 다시 사용할지에 더 큰 가치를 둡니다. 실제로 GA4 데이터 태깅을 통한 사용자 움직임 분석과 설문조사를 통해 불편사항을 개선한 경험이 있습니다.`
    },
    {
      question: "Q. 작업할 때 가장 중요하게 생각하는 부분이 있나요?",
      answer: `<b>“사용하는 기술의 장점이 프로젝트에 잘 녹아들어 있는가?”</b> 그게 제가 가장 중요하게 생각하는 부분입니다. 단순히 많이 쓰는 기술이라서 선택하는 것이 아니라, 정말 프로젝트에 적합한지, 혹시 오버스펙은 아닌지까지 고민합니다. 이런 고민은 개발의 생산성과 결과물의 완성도를 높여준다고 믿습니다.`,
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
