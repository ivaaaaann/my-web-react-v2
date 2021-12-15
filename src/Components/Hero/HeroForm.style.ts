import styled, { css, keyframes } from "styled-components";

interface IHeroTitleProps {
  isTop: boolean;
  startPoint: number;
  placement: number;
}

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeroCover = styled.div<{ heroPhoto: string }>`
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.heroPhoto});
`;

export const HeroTitle = styled.h1<IHeroTitleProps>`
  font-size: 40px;
  color: white;
  position: absolute;
  top: ${(props) => props.placement}px;
  font-weight: bold;
  ${(props) =>
    props.isTop &&
    css`
      animation-name: ${HeroTitleFade(props.startPoint)};
      animation-duration: 1s;
      animation-fill-mode: both;
    `}
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
