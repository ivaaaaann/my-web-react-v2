import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.div)`
  width: 100%;
  height: 72px;
  position: fixed;
  display: flex;
  top: 0px;
  z-index: 2;
  background-color: ${(props) => props.theme.mainBg};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrap = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.img`
  height: 40px;
`;

export const headerVariants = {
  top: {
    borderBottom: "0px",
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "0px",
  },
  scroll: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderBottom: `1px solid #dbdbdb`,
    backgroundColor: "#ffffff",
  },
};
