import styled, { css, keyframes } from "styled-components";

interface IHeroTitleProps {
  isArrival: boolean;
  startPoint: number;
  isRight: boolean;
}

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

export const HeroTitle = styled.div<IHeroTitleProps>`
  width: 540px;
  height: 700px;
  font-size: 40px;
  color: black;
  position: absolute;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainBg};
  top: 15%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

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

  ${(props) =>
    props.isRight
      ? css`
          right: 350px;
        `
      : css`
          left: 350px;
        `}
  ${(props) =>
    props.isArrival &&
    css`
      transition: 1.4s;
      animation-name: ${HeroTitleFade(props.startPoint)};
      animation-duration: 1.4s;
      animation-fill-mode: both;
    `};
`;

export const CityImg = styled.img`
  width: 100%;
`;

export const FaceImg = styled.img`
  width: 150px;
  height: 180px;
  border: 1px solid black;
  margin-left: auto;
`;

export const LanguageImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-left: 5px;
`;

const HeroTitleFade = (startPoint: number) => keyframes`
    from{
        transform: translate3d(${startPoint}px, 0, 0);
    }
    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
`;
