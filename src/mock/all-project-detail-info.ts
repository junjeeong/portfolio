export const allProjectDeatilInfo = {
  mbtips: {
    imageUrl: "/logo/mbtips.svg",
    title: "Mbtips",
    description: `네이버 클로바를 이용한 AI 생성형 챗봇 플랫폼입니다.
    상대방과의 관계, mbti를 설정할 수 있으며 어떤 주제로 대화를 나누면 좋을지 추천해 줍니다.`,
    tags: ["팀", "반응형", "CRA", "Naver Clova"],
    duration: "2025.02 ~ 2025.05",
    members: "6인(기획자 1명, 디자이너 1명, 백엔드 2명, 프론트 2명)",
    themeColor: "#5b49e5",
    features: [
      "카카오 로그인",
      "상대방 Mbti 테스트",
      "나만의 MBTI 친구 만들기",
      "AI 생성형 채팅",
    ],
    stacks: {
      React:
        "Mbtips는 대부분 로그인 이후에 작동되는 SPA 구조입니다. 이에 따라 복잡한 설정 없이 빠르게 개발을 시작할 수 있는 CRA(Create React App)를 선택하였습니다.",
      TypeScript:
        " 코드의 안정성과 유지보수성, 그리고 협업 효율을 고려하여 런타임 오류를 줄이기 위한 정적 타입 시스템인 typescript를 도입했습니다.",
      GA4: "기존에는 사용자 경험 개선을 주로 직관이나 추측에 의존했지만, 실제 사용자 행동과 이탈 지점을 데이터로 파악할 필요가 있었습니다. 이에 따라 이벤트 기반 분석이 가능한 React-Ga4 라이브러리를 사용하여, click/view 이벤트를 중심으로 사용자 흐름을 추적하였습니다.",
      GithubActions:
        "코드 변경부터 배포까지의 흐름을 자동화하고, PR 단위로 테스트 및 린트를 수행해 코드 품질을 사전에 검증하기 위해 GitHub Actions를 도입하였습니다.",
      Zustand:
        "전역 상태 공유가 필요한 폼 데이터와 챗봇 응답 흐름을 간결하게 관리하기 위해, 보일러플레이트가 적고 직관적인 Zustand를 도입했습니다.",
    },
    troubles: {
      "페이지 간 상태 종속성 제거로 UX 및 유지보수성 향상": {
        problem:
          "주 콘텐츠 페이지를 공유받아 들어온 사용자가, 404 에러를 마주하는 상황 발생, 페이지 컴포넌트가 필요로 하는 상태값이 다른 페이지에 종속되어 있다는 문제를 발견함",
        progress:
          "각 페이지의 상태를 독립적으로 관리할 수 있도록 navigate.state 대신 URL 기반의 동적 파라미터 구조로 개선함",
        result:
          "사용자가 원활하게 페이지를 공유받을 수 있게 됨 UX 상승, 개발자가 페이지 컴포넌트의 상태를 번거롭게 추적할 일이 없어지기에 개발의 편의성 및 유지보수성 증가",
      },
      "데이터 기반 사용자 행동 분석을 통한 UX 개선": {
        problem:
          "사용자 행동 기반의 불편 지점이 불명확함. 직관이나 추측에 의존하는 한계가 분명 존재하다고 판단",
        progress:
          "실제 사용자의 행동을 파악하기 위해 G4 React 라이브러리를 활용해 click/view 이벤트를 태깅하고, 설문조사를 병행하여 사용자 불편 요소를 실질적인 데이터로 분석함.",
        result:
          "데이터 기반 분석을 통해 사용자 이탈 지점을 명확히 파악하고, UI 개선으로 클릭률 및 전환율 향상 유도.",
      },
    },
  },
  albaform: {
    imageUrl: "/logo/albaform.svg",
    title: "Albaform",
    description: `Albaform은 구인·구직자가 공고를 손쉽게 등록·지원할 수 있는 긱워커 플랫폼입니다.
구직자와 구인자에게 다른 UI/UX를 제공해야 해 상태 분기 관리가 복잡했고,
SPA 구조의 폼 작성 페이지에서는 이전 설정값 유지가 핵심 과제였습니다.`,
    tags: ["팀", "반응형", "Next.js", "App Router"],
    duration: "2024.11 - 2024.12",
    members: "4인(프론트 4명)",
    themeColor: "#f89a05",
    features: [
      "카카오 로그인",
      "카카오 Map SDK",
      "지원자/사장님에 따라 다른 UX 제공",
    ],
    stacks: {
      NextJS:
        "App Router 기반의 폴더 구조를 활용하여, 페이지 단위의 명확한 역할 분리가 가능하도록 구성했습니다. 서버 컴포넌트와 클라이언트 컴포넌트를 명확히 구분하여 hydration 대상 최소화 및 초기 렌더링 최적화를 달성하였습니다.",
      Typescript:
        "입력 폼과 조건 분기 등 복잡한 UI 흐름에서 타입 안정성을 확보하기 위해 TypeScript를 도입했습니다. 이를 통해 폼 유효성 검증 및 조건부 렌더링 시 코드 신뢰도를 높일 수 있었습니다.",
      Tailwind:
        "UI 구현 속도를 높이고, 클래스 네이밍의 일관성을 유지하기 위해 Tailwind CSS를 도입했습니다. 반응형 디자인 구현에도 효율적으로 대응할 수 있었습니다.",
      Jotai:
        "사용자 역할에 따라 다른 UI/UX를 제공하는 구조상, 페이지 단위 상태 분리가 필요했습니다. 최소한의 전역 상태 공유를 위해 경량 상태 관리 라이브러리인 Jotai를 선택하였습니다.",
      ReactHookForm:
        "폼 작성 중 이전 페이지 값이 유지되어야 하는 상황에서, 불필요한 리렌더링 없이 입력값을 관리하기 위해 React Hook Form을 도입했습니다.",
      Zod: "React Hook Form과 연동해 사용자 입력값의 유효성 검증을 정교하게 수행하기 위해 Zod를 도입하였습니다. 타입 정의와 검증 로직을 일관되게 유지할 수 있었습니다.",
    },
    troubles: {
      "SSL 적용을 통한 웹 보안 강화 및 품질 지표 향상": {
        problem:
          "일부 페이지에서 Lighthouse Best Practices 점수가 78점으로 낮게 측정됨",
        progress:
          "HTTP 통신으로 인한 보안 경고 확인, 배포 시 SSL 적용으로 HTTPS로 전환",
        result:
          "Lighthouse 측정 결과, Best Practices를 포함한 모든 지표가 90점 이상으로 측정됨",
      },
      "App Router 구조 재정비를 통한 렌더링 성능 최적화": {
        problem:
          "App Router의 구조와 장점을 제대로 이해하지 못한 채 프로젝트를 시작",
        progress:
          "Hydration 최소화, Suspense 활용, 이미지 최적화 등 App Router의 강점 전반을 점검",
        result:
          "클라이언트 컴포넌트를 최소화하여 JS 번들 축소, Suspense로 FCP 개선, TTI 및 UX 향상",
      },
    },
  },
  wikied: {
    imageUrl: "/logo/wikied.svg",
    title: "Wikied",
    description: `Wikied는 지인 정보를 위키 형태로 작성·공유할 수 있는 플랫폼입니다.
무한 스크롤 구현과 HTML 콘텐츠를 마크다운 스타일로 렌더링하는 것이 주요 과제였습니다.`,
    tags: ["팀", "반응형", "Next.js", "Page Router"],
    duration: "2024.11 - 2024.11",
    members: "5인(프론트 5명)",
    themeColor: "#4bbea3",
    features: [
      "로그인/회원가입",
      "지인의 위키를 직접 수정",
      "무한 스크롤",
      "위키 작성중 권한 관리",
    ],
    stacks: {
      NextJs:
        "Page Router를 기반으로 한 전통적인 Next.js 구조를 활용하여, 빠르게 프로젝트를 구성하고 배포할 수 있었습니다.",
      TanstacksQuery:
        "반복적인 데이터 요청으로 인한 사용자 경험 저하를 해결하기 위해 TanStack Query를 도입하여, API 요청을 캐싱하고 네트워크 효율성을 높였습니다.",
      Typescript:
        "지인 위키 콘텐츠의 필드가 다양하고 동적이었기 때문에, 데이터 구조를 명확히 정의하고 안정성을 확보하기 위해 TypeScript를 사용했습니다.",
      Tailwind:
        "다양한 컴포넌트를 빠르게 구성하고 일관된 스타일 시스템을 유지하기 위해 Tailwind CSS를 사용했습니다.",
      Zustand:
        "무한 스크롤 상태와 유저 편집 권한 정보를 전역에서 다루기 위해, 가볍고 선언적인 전역 상태 관리 도구인 Zustand를 활용했습니다.",
    },
    troubles: {
      "TanStack Query 기반 캐싱으로 비동기 요청 최적화": {
        problem:
          "비동기 요청이 반복적으로 발생하면서, 사용자에게 대체 UI가 자주 노출되는 문제가 발생",
        progress:
          "Tanstacks Query의 useQuery 메서드를 활용해 기존 fetch 요청을 캐싱된 데이터로 대체",
        result:
          "평균 1.2초 소요되던 중복 API 요청이 제거되어 재방문 시 콘텐츠가 즉시 표시되었고, 사용자 체감 속도가 개선됨",
      },
      "Frontend-Fundamentals 기반 구조 개선으로 가독성 향상": {
        problem:
          "페이지 컴포넌트가 상태와 JSX를 함께 관리하면서 로직이 복잡해지고 가독성이 저하된 상황",
        progress:
          "토스팀에서 제시한 Frontend-Fundamentals 클린코드 가이드를 바탕으로 리팩터링을 진행",
        result:
          "상태는 Hook이, 페이지는 UI만 담당하도록 구조 개선 → 유지보수성과 가독성 향상, DX 개선",
      },
    },
  },
  linkbrary: {
    imageUrl: "/logo/linkbrary.svg",
    title: "Linkbrary",
    description: `Linkbrary는 자주 방문하는 사이트를 카드 형식으로 관리하고 공유할 수 있는 웹 플랫폼입니다.
상호작용 요소가 집중된 페이지 구조로 인해, 상태 분기 관리와 리렌더링 최소화가 핵심 과제였습니다.`,
    tags: ["팀", "반응형", "Next.js", "Page Router"],
    duration: "2024.10 - 2024.11",
    members: "4인(프론트 4명)",
    themeColor: "#6d71fe",
    features: [
      "카카오 로그인",
      "저장하고 싶은 링크를 추가하고 폴더로 관리",
      "나만의 링크가 저장된 폴더를 지인에게 공유",
      "링크 즐겨찾기로 관리",
    ],
    stacks: {
      NextJs:
        "Page Router를 기반으로 한 전통적인 Next.js 구조를 활용하여, 빠르게 프로젝트를 구성하고 배포할 수 있었습니다.",
      TanstacksQuery:
        "반복적인 데이터 요청으로 인한 사용자 경험 저하를 해결하기 위해 TanStack Query를 도입하여, API 요청을 캐싱하고 네트워크 효율성을 높였습니다.",
      Typescript:
        "지인 위키 콘텐츠의 필드가 다양하고 동적이었기 때문에, 데이터 구조를 명확히 정의하고 안정성을 확보하기 위해 TypeScript를 사용했습니다.",
      Tailwind:
        "다양한 컴포넌트를 빠르게 구성하고 일관된 스타일 시스템을 유지하기 위해 Tailwind CSS를 사용했습니다.",
      Zustand:
        "무한 스크롤 상태와 유저 편집 권한 정보를 전역에서 다루기 위해, 가볍고 선언적인 전역 상태 관리 도구인 Zustand를 활용했습니다.",
    },
    troubles: {
      "에러 핸들링 강화로 명확한 사용자 피드백 제공": {
        problem:
          "서버에서 404, 500 오류 발생 시 사용자에게 안내가 없어 혼란 발생",
        progress:
          "에러 코드를 감지해 Next.js의 404.tsx, 500.tsx 등으로 리다이렉션",
        result:
          "사용자에게 오류 상황을 명확히 전달하고, 빠르게 대처할 수 있는 UX 제공",
      },
      "HttpOnly 쿠키 기반 인증 전환으로 XSS/CSRF 보안 강화": {
        problem:
          "AccessToken과 RefreshToken을 로컬 스토리지에 저장해, XSS로 인한 노출 위험 발생",
        progress:
          "로그인 시 토큰을 HttpOnly 쿠키에 저장하고, 인증 처리는 서버 API Route에서 Proxy 방식으로 수행",
        result:
          "클라이언트에서 토큰 접근을 차단하고 서버 중심 처리로 전환하여 XSS/CSRF 보안 강화",
      },
    },
  },
};
