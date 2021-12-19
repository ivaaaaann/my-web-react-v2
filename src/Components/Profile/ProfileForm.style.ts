import { motion } from "framer-motion";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.subBg};
`;
export const ProfileBoxWrap = styled.div`
  width: 60%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;

export const ProfileItemWrap = styled.div`
  column-gap: 60px;
  display: flex;
  margin-top: auto;
`;

export const ProfileTitle = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.main_color};
  font-weight: bold;
`;

export const ProfileSubTitle = styled.h1`
  font-size: 18px;
  color: gray;
  font-weight: 300;
  margin-top: 10px;
`;

export const ProfileBox = styled.div`
  width: 540px;
  height: 700px;
  font-size: 40px;
  color: black;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainBg};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-right: 100px;

  div {
    display: flex;
  }

  h1 {
    font-size: 25px;
    font-weight: 300;
  }

  h2 {
    font-size: 25px;
    color: ${(props) => props.theme.main_color};
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: 300;
  }

  h4 {
    font-size: 18px;
    cursor: pointer;
    font-weight: 300;
  }

  article {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
  }

  hr {
    width: 100%;
    border: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  li {
    font-size: 18px;
    font-weight: 300;
    display: flex;
    align-items: center;
  }

  ol {
    font-size: 18px;
    font-weight: 300;
  }

  b {
    font-weight: bold;
  }

  :first-child {
    margin-left: 0px;
  }

  :last-child {
    margin-right: 0px;
  }
`;

export const ProfileCard = styled.div`
  width: 540px;
  height: 700px;
  margin-right: 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ProfileCardCover = styled.div<{ bgPhoto: string }>`
  width: 100%;
  min-height: 45%;
  padding: 50px;
  box-sizing: border-box;
  color: #182153;
  background-image: linear-gradient(
      rgba(24, 33, 83, 0.7),
      rgba(24, 33, 83, 0.7)
    ),
    url(${(props) => props.bgPhoto});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProfileCardImg = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: ${(props) => props.theme.mainBorder};
`;

export const ProfileCardOverviewWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  padding-top: 120px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    text-align: center;
    font-weight: 300;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    font-weight: 300;
    color: gray;
    margin-top: 15px;
  }

  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.main_color};
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 20px;
  }
`;
export const SliderWrap = styled.div`
  position: relative;
`;

export const Slider = styled(motion.div)`
  position: relative;
  width: 100%;
  z-index: 1;
  height: 90px;
  overflow: hidden;
`;

export const Row = styled(motion.div)`
  width: 438px;
  height: 80px;
  display: flex;
  justify-content: center;
  column-gap: 70px;
  position: absolute;
  box-sizing: border-box;
  top: 0px;
  left: 0px;
`;

export const rowVariants = {
  hidden: {
    x: 438,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -438,
  },
};

export const ProfileStackBox = styled(motion.div)`
  width: 80px;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    font-size: 18px;
    color: white;
    display: none;
  }

  img {
    width: 90%;
    height: 90%;
    border-radius: 100px;
    object-fit: cover;
    object-position: center;
  }
`;

export const SliderBtn = styled.button`
  width: 20px;
  height: 80px;
  position: absolute;
  right: -30px;
  top: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${(props) => props.theme.mainBorder};
  background: linear-gradient(rgba(24, 33, 83, 0.5), rgba(24, 33, 83, 0.5));
  outline: none;
  box-sizing: content-box;
  padding: 0px;

  svg {
    width: 20px;
  }
`;
