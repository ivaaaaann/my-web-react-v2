import { motion } from "framer-motion";
import styled from "styled-components";

export const BigProjectModalOverLay = styled(motion.div)<{ scrollY: number }>`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 5;
  overflow: hidden;
`;

export const BigProjectModalContainer = styled(motion.div)`
  position: absolute;
  width: 1226px;
  height: 712px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.mainBg};
  z-index: 6;
  display: flex;
`;

export const BigProjectModalImg = styled.img`
  min-width: 60%;
  height: 100%;
  object-fit: scale-down;
  border-right: 1px solid ${(props) => props.theme.mainBorder};
`;

export const BigProjectModalIntroWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
`;

export const BigProjectModalTitle = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: bold;
  color: ${(props) => props.theme.main_color};
`;
export const BigProjectModalStackWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
`;

export const BigProjectModalStack = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  background-color: ${(props) => props.theme.subBg};
  border-radius: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BigProjectModalQuestionText = styled.h1`
  font-size: 18px;
  color: grey;
  font-weight: bold;
  margin-top: 20px;
`;

export const BigProjectModalText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  line-height: 17px;
`;
