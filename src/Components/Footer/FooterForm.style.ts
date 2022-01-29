import styled, { keyframes } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.theme.darkBg};
  display: flex;
  flex-direction: column;
`;

export const FooterWrap = styled.div`
  width: 60%;
  height: 100%;
  margin: 0px auto;
  padding: 60px 0px;
  box-sizing: border-box;
`;

export const FooterTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  color: white;
  margin-bottom: 70px;
  font-weight: bold;
`;

export const FooterUlWrap = styled.div`
  display: flex;
`;

const liAnimation = keyframes`
0%{
  transform: rotateZ(0);
   }
7% {
  transform: rotateZ(0);
}
15% {
  transform: rotateZ(-20deg);
}
20% {
  transform: rotateZ(20deg);
}
25% {
  transform: rotateZ(-20deg);
}
30% {
  transform: rotateZ(10deg);
}
35% {
  transform: rotateZ(-8deg);
}
40% {
  transform: rotateZ(0)s;
}
100% {
  transform: rotateZ(0);
}`;

export const FooterUl = styled.ul`
  width: 100%;
  display: flex;
  column-gap: 30px;

  li {
    text-align: start;
    color: ${(props) => props.theme.mainBorder};
    font-size: 18px;
    cursor: pointer;

    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }

    &:hover {
      text-decoration: underline;
      animation: ${liAnimation} 2s linear infinite;
    }
  }
`;
