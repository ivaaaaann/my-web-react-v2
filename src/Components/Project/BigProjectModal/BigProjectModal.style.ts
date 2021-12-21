import { motion } from "framer-motion";
import styled from "styled-components";

export const BigProjectModalOverLay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 3;
`;

export const BigProjectModalContainer = styled(motion.div)`
  position: absolute;
  width: 1226px;
  height: 712px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.mainBg};
  z-index: 4;
`;
