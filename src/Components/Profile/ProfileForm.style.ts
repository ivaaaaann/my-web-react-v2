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
`;

export const ProfileCardCover = styled.div`
  width: 100%;
  height: 45%;
  padding: 50px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.main_color};
  position: relative;
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
  background-color: grey;
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

// const HeroTitleFade = (startPoint: number) => keyframes`
//     from{
//         transform: translate3d(${startPoint}px, 0, 0);
//     }
//     to {
//         transform: translate3d(0, 0, 0);
//         opacity: 1;
//     }
// `;
