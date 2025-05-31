const EducationSection = () => {
  return (
    <section className="grid grid-cols-2 max-w-[800px] mt-8 fadein-fast gap-6 justify-items-center">
      <div className="flex flex-col gap-5 w-[380px] h-[360px] bg-[#323232] p-5 rounded-[4px]">
        <h2 className="text-5xl font-normal text-white">
          코드잇 - Sprint FE 9기
        </h2>
        <p className="text-[#a6a6a6] text-sm"> 2024.07 ~ 2024.12 수료 </p>
        <p className="flex flex-col text-[#a6a6a6]">
          <span>• 3번의 팀장 경험을 수행</span>
          <span>• 꾸준한 기술 블로그 작성으로 수상</span>
        </p>
        <a
          href="https://velog.io/@wn8624/Sprint-6%EA%B0%9C%EC%9B%94-%EA%B3%BC%EC%A0%95%EC%9D%84-%EB%A7%88%EC%B9%98%EB%A9%B0"
          target="_blank"
          className="text-[#a6a6a6] underline"
        >
          Go blog
        </a>
      </div>
      <div className="flex flex-col gap-5  w-[380px] h-[360px] bg-[#323232] p-5 rounded-[4px]">
        <h2 className="text-5xl font-normal text-white">
          &quot;모던 JS Deep Dive&quot; 북스터티{" "}
        </h2>
        <p className="text-[#a6a6a6] text-sm">2023.08 ~ 2023.10</p>
        <p className="flex flex-col text-[#a6a6a6]">
          <span>• 조장 역할 수행</span>
          <span>• 주 5회 모여 돌아가며 발표를 진행</span>
          <span>• 책을 읽으며 궁금했던 주제에 대해서 토론을 진행</span>
        </p>
        <a
          href="https://github.com/junjeeong/JS_Deepdive_book_study"
          target="_blank"
          className="text-[#a6a6a6] underline"
        >
          Go blog
        </a>
      </div>
      <div className="flex flex-col gap-5  w-[380px] h-[360px] bg-[#323232] p-5 rounded-[4px]">
        <h2 className="text-5xl font-normal text-white">
          &quot;면접을 위한 CS 전공지식 노트&quot; 북스터디
        </h2>
        <p className="text-[#a6a6a6] text-sm">2024.07.18 ~ 2024.09.13</p>
        <p className="flex flex-col text-[#a6a6a6]">
          <span>• 조장 역할 수행</span>
          <span>• 주 4회 모여 돌아가며 발표를 진행</span>
          <span>• 책을 읽으며 궁금했던 주제에 대해서 토론을 진행</span>
        </p>
        <a
          href="https://github.com/junjeeong/CS_book_study"
          target="_blank"
          className="text-[#a6a6a6] underline"
        >
          Go Blog
        </a>
      </div>
    </section>
  );
};

export default EducationSection;
