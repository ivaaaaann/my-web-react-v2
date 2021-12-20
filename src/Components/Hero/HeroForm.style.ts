import styled from "styled-components";

interface IHeroTitleProps {
  isMainFont?: boolean;
  fontSize?: number;
}

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroBg = styled.div<{ heroPhoto: string }>`
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.heroPhoto});
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  margin-left: auto;
`;

export const HeroProfileBoxWrap = styled.div`
  width: 950px;
  height: 610px;
  position: absolute;
  left: 55%;
  top: 58%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroProfileBox = styled.div`
  width: 950px;
  height: 610px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  padding: 100px 140px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  div {
    display: flex;
    column-gap: 10px;
  }

  article {
    margin-top: auto;
    display: flex;
  }
`;

export const HeroTitle = styled.h1<IHeroTitleProps>`
  color: ${(props) => (props.isMainFont ? props.theme.main_color : "white")};
  font-size: ${(props) => props.fontSize}px;
  font-weight: 300;
`;

export const HeroCoverWrap = styled.div`
  width: 50%;
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const HeroCover = styled.div`
  width: 951px;
  height: 100vh;
  background-color: ${(props) => props.theme.main_color};
`;

export const HeroButton = styled.button`
  min-width: 300px;
  height: 50px;
  margin-top: auto;
  border-radius: 30px;
  background-color: ${(props) => props.theme.main_color};
  color: white;
  border: 0px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
`;

export const HeroSNSWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 40px;
  padding-left: 60px;

  svg {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
`;
