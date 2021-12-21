import { atom } from "recoil";
import * as imgs from "../asset/img";

interface IProjectListProps {
  type: string;
  title: string;
  subTitle: string;
  field: string;
  stacks: IProjectStackProps[];
  img: string;
  id: number;
}

interface IProjectStackProps {
  name: "string";
}

export const ProjectList: IProjectListProps[] = [
  {
    id: 1,
    type: "team",
    title: "GLASS",
    subTitle: "바인드 인턴팀에서 만든 교내 SNS플랫폼 입니다.",
    field: "front-end",
    img: imgs.bigGlass,
    stacks: [],
  },
  {
    id: 2,
    type: "team",
    title: "PTPO",
    subTitle: "바인드 단디 아카데미에서 만든 포트폴리오 관리 웹입니다.",
    field: "front-end",
    img: imgs.bigPTPO,
    stacks: [],
  },
  {
    id: 3,
    type: "toy",
    title: "트위터 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 트위터 클론 코딩입니다.",
    field: "front-end",
    img: imgs.bigTwiiterClone,
    stacks: [],
  },
  {
    id: 4,
    type: "toy",
    title: "넷플릭스 클론코딩",
    subTitle: "노마드 코더 강의를 보고 따라 만든 넷플릭스 클론 코딩입니다.",
    field: "front-end",
    img: imgs.bigNetflixClone,
    stacks: [],
  },
  {
    id: 5,
    type: "toy",
    title: "coinTracker 클론 코딩",
    subTitle:
      "노마크 코더 강의를 보고 따라 만든 비트코인 트랙커 클론 코딩입니다.",
    field: "front-end",
    img: imgs.bigCoinTracker,
    stacks: [],
  },
  {
    id: 6,
    type: "toy",
    title: "lastfm 클론 코딩",
    subTitle: "친구 1명과 같이 만든 lastfm 클론 코딩입니다.",
    field: "front-end",
    img: imgs.bigLastfmClone,
    stacks: [],
  },
  {
    id: 7,
    type: "toy",
    title: "My-Web-React",
    subTitle: "제 포트폴리오를 정리한 웹사이트입니다.",
    field: "front-end",
    img: imgs.bigMyWebReact,
    stacks: [],
  },
  {
    id: 8,
    type: "toy",
    title: "My-Web-React-V2",
    subTitle: "제 포트폴리오를 또 정리한 웹사이트 입니다.",
    field: "front-end",
    img: imgs.bigMyWebReactV2,
    stacks: [],
  },
];

export const projectAtom = atom<IProjectListProps[]>({
  key: "projecAtom",
  default: ProjectList.filter((project) => project.type === "toy"),
});
