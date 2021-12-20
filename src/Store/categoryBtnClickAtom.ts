import { atom } from "recoil";

interface IcategoryBtnClickAtom {
  toyBtnClick: boolean;
  teamBtnClick: boolean;
}

export const categoryBtnClickAtom = atom<IcategoryBtnClickAtom>({
  key: "categoryBtnClickAtom",
  default: {
    toyBtnClick: true,
    teamBtnClick: false,
  },
});
