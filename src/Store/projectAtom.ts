import { atom } from "recoil";
import * as imgs from "../asset/img";

export interface IProjectListProps {
  type: string;
  title: string;
  subTitle: string;
  field?: string;
  stacks: string[];
  impression?: string;
  learned?: string;
  img: string;
  id: number;
  githubLink?: string;
}

export const ProjectList: IProjectListProps[] = [
  {
    id: 0,
    type: "team",
    title: "GLASS",
    subTitle: "바인드 인턴팀에서 만든 교내 SNS플랫폼 입니다.",
    impression:
      "먼저 처음으로 한 규모있는 프로젝트였어서 걱정이 많았습니다. 하지만 이 프로젝트를 통해 Axios를 통한 API 통신에 능숙해 질 수 있었습니다. 그리고 multiple image 통신, Intersection Observer (무한스크롤), 상태관리 라이브러리인 Recoil 등 여러 기술 등을 배울 수 있었고, 데드라인이 있었어서 기간 내에 아웃풋을 내야한다는 마음때문에 책임감도 느낄 수 있었습니다.",
    field:
      "제가 맡은 역할은 팀장, 프론트엔드 였습니다. 그리고 다른 프론트엔드 친구 1명이랑 같이 프론트엔드를 진행했습니다.",
    img: imgs.bigGlass,
    stacks: ["React", "Recoil", "JavaScript", "Axios"],
    githubLink: "https://github.com/B1ND-6th-intern/GLASS_WEB",
  },
  {
    id: 1,
    type: "team",
    title: "PTPO",
    subTitle: "바인드 단디 아카데미에서 만든 포트폴리오 관리 웹입니다.",
    impression:
      "개발을 막 시작했을때 진행했던 프로젝트입니다. 웹 1명, 서버 1명, 안드로이드 1명 총 3명에서 개발하였습니다. 하지만 전부 기술적으로 많이 부족했던터라 완성하지는 못하였습니다. 하지만 이때 바닐라로 개발을 진행했었어서, HTML 태그나 CSS 스타일 부분에서 기본기가 많이 향상 된거 같습니다. 그리고 JavaScript 기본기도 조금 쌓였었습니다.",
    field: "저는 프론트엔드를 맡았었습니다.",
    img: imgs.bigPTPO,
    stacks: ["HTML5&CSS3", "JavaScript"],
  },
  {
    id: 2,
    type: "toy",
    title: "트위터 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 트위터 클론 코딩입니다.",
    learned:
      "트위터를 클론 코딩한 토이 프로젝트입니다. firebase를 통해 DB, SnapShot 기능을 사용하여 실시간으로 게시물이 뜨는 기능을 구현할 수 있었습니다. 그리고 통신하는 형식에 대해 좀 알 수 있었습니다.",
    img: imgs.bigTwiiterClone,
    stacks: ["React", "Firebase", "JavaScript"],
    githubLink:
      "https://github.com/ldh3907/study-react-nomadcoder-twitter-clone-coding",
  },
  {
    id: 3,
    type: "toy",
    title: "넷플릭스 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 넷플릭스 클론 코딩입니다.",
    learned:
      "넷플릭스를 클론 코딩한 토이 프로젝트입니다. TMDB의 api를 사용하여 정보를 가져왔습니다. framer-motion 라이브러리를 사용하여 여러 에니메이션을 적용시킬 수 있었습니다.",
    img: imgs.bigNetflixClone,
    stacks: ["React", "TypeScript", "Recoil", "Framer-Motion"],
    githubLink: "https://github.com/GEUM-AND-IM/netflix-clone",
  },
  {
    id: 4,
    type: "toy",
    title: "coinTracker 클론 코딩",
    subTitle:
      "노마크 코더 강의를 보고 따라 만든 비트코인 트랙커 클론 코딩입니다.",
    learned:
      "coinpaprika에서 coin api를 사용하여 비트코인 정보를 가져왔습니다. 여기서 react-query를 사용하여 state에 저장하지 않고 쉽게 데이터를 가공할 수 있었습니다. 그리고 ApexChart 라이브러리를 사용하여 코인 시세 정보를 시각화 할 수 있었습니다.",
    img: imgs.bigCoinTracker,
    stacks: ["React", "TypeScript", "Recoil", "React-Query"],
    githubLink: "https://github.com/ldh3907/coinTracker-clone",
  },
  {
    id: 5,
    type: "toy",
    title: "lastfm 클론 코딩",
    subTitle: "친구 1명과 같이 만든 lastfm 클론 코딩입니다.",
    learned:
      "음원 사이트인 lastfm을 클론 코딩하여 만든 토이 프로젝트 입니다. 타입스크립트를 사용하여 만든 첫 프로젝트라는 부분에서 의미가 큽니다. 이 프로젝트를 통해 interface와 axios 모듈화에 대해 좀 도움이 된 것 같습니다.",
    img: imgs.bigLastfmClone,
    stacks: ["React", "TypeScript", "Recoil"],
    githubLink: "https://github.com/GEUM-AND-IM/lastfm-clone",
  },
  {
    id: 6,
    type: "toy",
    title: "My-Web-React",
    subTitle: "제 포트폴리오를 정리한 웹사이트입니다.",
    learned:
      "제가 진행했던 프로젝트나 공부했던 것을 모아둔 웹사이트 입니다. useRef, useEffect, useState 등 훅에 대한 기본기가 쌓였던 것 같습니다.",
    img: imgs.bigMyWebReact,
    stacks: ["React", "JavaScript"],
    githubLink: "https://github.com/ldh3907/my-web-react",
  },
  {
    id: 7,
    type: "toy",
    title: "My-Web-React-V2",
    subTitle: "제 포트폴리오를 또 정리한 웹사이트 입니다.",
    learned:
      "첫번째 포트폴리오 웹사이트를 만들고 시간이 좀 지나고 만든 포트폴리오 웹사이트 입니다. 최대한 인터렉티브 부분에서 고민을 많이 했었습니다. 그래서 react-reveal, three.js, 넷플릭스 클론 코딩에서 배웠던 framer-motion 등의 라이브러리를 찾아보고 사용해봤습니다. 하지만 three.js는 수학적 지식이 필요하여 조금 어려웠습니다.",
    img: imgs.bigMyWebReactV2,
    stacks: ["React", "TypeScript", "Recoil"],
    githubLink: "https://github.com/ldh3907/my-web-react-V2",
  },
  {
    id: 8,
    type: "team",
    title: "맛있소고",
    subTitle:
      "대구소프트웨어마이스터고등학교 근처 맛집을 추천하는 플렛폼입니다.",
    impression:
      "5기 형들과 같이 하는 프로젝트여서 많이 긴장되는 부분이 있었습니다. 전체적인 개발은 형들이 하고, 저희는 발표, 디자인 등을 맡았습니다. 형들과 함께 하다 보니 협업하는 과정을 깊게 알지는 못 했어도, 맛보기 정도는 한 것 같습니다.",
    field:
      "전체적인 개발은 형들이 하고, 저는 웹 퍼블리싱(반응형 등), 발표자를 맡았습니다.",
    img: imgs.bigMatitsogo,
    stacks: ["HTML5&CSS3"],
    githubLink: "https://github.com/2021-summer-hackerthon/web",
  },
  {
    id: 9,
    type: "team",
    title: "MOIZA",
    subTitle: "소프트웨어고 통합 커뮤니티 플랫폼입니다.",
    impression:
      "다른 마이스터고 애들과 협업을 하면서 깃플로우, 깃헙플로우 등 여러 협업 방법을 알게 되었고, 확실히 규모 있는 프로젝트다 보니 유지/보수(리소스 최소와, 재활용 컴포넌트, 리팩토링 등) 에 대해 많이 신경썼던거 같습니다. ",
    field:
      "저는 프론트엔드 개발을 맡았습니다. 로그인/회원가입/아이디&비밀번호 찾기 부분 퍼블리싱과 로직을 짰습니다.",
    img: imgs.bigMoiza,
    stacks: ["React", "TypeScript", "Recoil", "Styled-Components"],
    githubLink: "https://github.com/Software-Meister-High-School-Community",
  },
  {
    id: 10,
    type: "team",
    title: "하이톤 랜딩페이지",
    subTitle: "제 7회 하이톤에서 만든 하이톤 랜딩페이지 입니다.",
    impression:
      "대덕,광주 등 여러 학교가 참여하는 해커톤에서 기술적, 친목적으로 많은 경험을 쌓을 수 있었습니다.저희 팀은 하이톤에서 나온 작품을 제출, 관람 할 수 있는 하이톤 랜딩페이지를 만들었습니다. 백엔드 광소마고에 3학년 선배님이랑 같이 팀을 하게 되었는데 개발자 도구(network, source)에 대한 꿀팁을 많이 가르쳐 주셨습니다. 그리고 access-token 디코드에 대한 것도 배웠습니다.",
    field:
      "저는 프론트엔드 개발을 맡았습니다. 해커톤이라 체계적인 역할분담은 하지 않고 하고싶은부분 만드는 형식이었습니다.",
    img: imgs.bigHighthon7th,
    stacks: ["React", "TypeScript", "Recoil", "Styled-Components"],
    githubLink: "https://github.com/7thHighthon",
  },
  {
    id: 11,
    type: "toy",
    title: "React Boilerplate",
    subTitle: "웹팩을 적용한 React + TS boilerplate 입니다.",
    impression:
      "웹팩 공부를 하고 어떻게 웹팩을 사용해야 할지 모르겠어서 구글링을 해보다가 boilerplate를 만들게 되었습니다. 만들면서 강의에서 안나왔던 babel-loader 나 ts-loader 등 여러 로더들을 알게 되었고, 만든 boilerplate를 npm에 올리는 방법도 배웠습니다.",
    img: imgs.bigBoilerplate,
    stacks: ["React", "TypeScript", "Webpack5"],
    githubLink: "https://github.com/ldh3907/react-boilerplate",
  },
];

export const projectAtom = atom<IProjectListProps[]>({
  key: "projecAtom",
  default: ProjectList.filter((project) => project.type === "toy"),
});
