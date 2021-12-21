import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ProjectFormContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.subBg};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
`;

export const ProjectWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.main_color};
  font-weight: bold;
  text-align: center;
`;

export const ProjectSubTitle = styled.h1`
  font-size: 18px;
  color: gray;
  font-weight: 300;
  margin-top: 10px;
  text-align: center;
`;

export const ProjectCategoryBtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectCategoryBtn = styled.button<{ isClick: boolean }>`
  width: 104px;
  height: 40px;
  margin: 0px 30px;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.isClick
      ? css`
          background-color: ${props.theme.main_color};
          border: 1px solid ${props.theme.mainBorder};
          color: white;
        `
      : css`
          border: 1px solid ${(props) => props.theme.main_color};
          color: ${(props) => props.theme.main_color};
        `}
`;

export const ProjectBoxWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 37px;
  row-gap: 37px;
`;

export const ProjectBox = styled(motion.div)`
  width: 255px;
  height: 286px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
`;

export const ProjectBoxVariants = {
  normal: {
    y: 0,
  },
  hover: {
    y: -35,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

export const ProjectBoxImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;
