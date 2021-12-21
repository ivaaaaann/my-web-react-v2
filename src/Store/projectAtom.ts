import { atom } from "recoil";
import * as imgs from "../asset/img";

interface IProjectListProps {
  type: string;
  title: string;
  subTitle: string;
  field: string;
  stacks: IProjectStackProps[];
  img: string;
}

interface IProjectStackProps {
  name: "string";
}

export const ProjectList: IProjectListProps[] = [
  {
    type: "team",
    title: "GLASS",
    subTitle: "",
    field: "front-end",
    img: imgs.bigGlass,
    stacks: [],
  },
  {
    type: "team",
    title: "PTPO",
    subTitle: "",
    field: "front-end",
    img: imgs.bigPTPO,
    stacks: [],
  },
  {
    type: "toy",
    title: "트위터 클론코딩",
    subTitle: "",
    field: "front-end",
    img: imgs.bigTwiiterClone,

    stacks: [],
  },
  {
    type: "toy",
    title: "넷플릭스 클론코딩",
    subTitle: "",
    field: "front-end",
    img: imgs.bigNetflixClone,

    stacks: [],
  },
  {
    type: "toy",
    title: "coinTracker 클론 코딩",
    subTitle: "",
    field: "front-end",
    img: imgs.bigCoinTracker,

    stacks: [],
  },
  {
    type: "toy",
    title: "lastfm 클론 코딩",
    subTitle: "",
    field: "front-end",
    img: imgs.bigLastfmClone,

    stacks: [],
  },
  {
    type: "toy",
    title: "My-Web-React",
    subTitle: "",
    field: "front-end",
    img: imgs.bigMyWebReact,

    stacks: [],
  },
  {
    type: "toy",
    title: "My-Web-React-V2",
    subTitle: "",
    field: "front-end",
    img: imgs.bigMyWebReactV2,

    stacks: [],
  },
];

export const projectAtom = atom<IProjectListProps[]>({
  key: "projecAtom",
  default: ProjectList.filter((project) => project.type === "toy"),
});
