import { atom } from "recoil";
import * as imgs from "../asset/img";

export interface IProjectListProps {
  type: string;
  title: string;
  subTitle: string;
  field?: string;
  stacks: string[];
  impression?: string;
  img: string;
  id: number;
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
  },
  {
    id: 1,
    type: "team",
    title: "PTPO",
    subTitle: "바인드 단디 아카데미에서 만든 포트폴리오 관리 웹입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigPTPO,
    stacks: ["HTML5&CSS3", "JavaScript"],
  },
  {
    id: 2,
    type: "toy",
    title: "트위터 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 트위터 클론 코딩입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigTwiiterClone,
    stacks: ["React", "Firebase", "JavaScript"],
  },
  {
    id: 3,
    type: "toy",
    title: "넷플릭스 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 넷플릭스 클론 코딩입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigNetflixClone,
    stacks: ["React", "TypeScript", "Recoil", "Framer-Motion"],
  },
  {
    id: 4,
    type: "toy",
    title: "coinTracker 클론 코딩",
    subTitle:
      "노마크 코더 강의를 보고 따라 만든 비트코인 트랙커 클론 코딩입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigCoinTracker,
    stacks: ["React", "TypeScript", "Recoil", "React-Query"],
  },
  {
    id: 5,
    type: "toy",
    title: "lastfm 클론 코딩",
    subTitle: "친구 1명과 같이 만든 lastfm 클론 코딩입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigLastfmClone,
    stacks: ["React", "TypeScript", "Recoil"],
  },
  {
    id: 6,
    type: "toy",
    title: "My-Web-React",
    subTitle: "제 포트폴리오를 정리한 웹사이트입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigMyWebReact,
    stacks: ["React", "JavaScript"],
  },
  {
    id: 7,
    type: "toy",
    title: "My-Web-React-V2",
    subTitle: "제 포트폴리오를 또 정리한 웹사이트 입니다.",
    impression: "",
    field: "front-end",
    img: imgs.bigMyWebReactV2,
    stacks: ["React", "TypeScript", "Recoil"],
  },
];

export const projectAtom = atom<IProjectListProps[]>({
  key: "projecAtom",
  default: ProjectList.filter((project) => project.type === "toy"),
});
