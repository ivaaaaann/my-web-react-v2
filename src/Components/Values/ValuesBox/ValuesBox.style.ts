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

export const ValuesBoxContainer = styled.div<{ bgPhoto: string }>`
  width: 285px;
  height: 285px;
  position: relative;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  &:hover {
    ${ValuesBoxContent} {
      top: 0px;
    }
  }
`;
