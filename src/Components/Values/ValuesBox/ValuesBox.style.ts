import { motion } from "framer-motion";
import styled from "styled-components";

export const ValuesBoxContent = styled(motion.div)`
  width: 285px;
  height: 285px;
  position: absolute;
  bottom: -285px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  transition: 1s;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
  z-index: 0;
  h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0px auto;
  }

  p {
    width: 100%;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const ValuesBoxContainer = styled(motion.div)<{ bgPhoto: string }>`
  width: 285px;
  height: 285px;
  position: relative;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  margin: 0px 20px;
  z-index: 0;

  &:hover {
    ${ValuesBoxContent} {
      top: 0px;
    }
  }

  &:last-child {
    margin-right: 0px;
  }

  &:first-child {
    margin-left: 0px;
  }
`;

export const ValuesBoxVariants = {
  normal: {
    zIndex: 0,
  },
  hover: {
    transition: {
      duration: 0.5,
    },
    scale: 1.1,
    zIndex: 1,
  },
};
