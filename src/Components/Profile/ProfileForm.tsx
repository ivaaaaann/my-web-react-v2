import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  ProfileBox,
  ProfileContainer,
  ProfileBoxWrap,
  ProfileTitle,
  ProfileSubTitle,
  ProfileItemWrap,
  ProfileCard,
  ProfileCardCover,
  ProfileCardImg,
  ProfileCardOverviewWrap,
  Slider,
  Row,
  rowVariants,
  ProfileStackBox,
  SliderBtn,
  SliderWrap,
} from "./ProfileForm.style";
import * as Imgs from "../../asset/img/index";

interface IstackListProps {
  img: string;
  langName: string;
}

const stackList: IstackListProps[] = [
  {
    img: "data:image/png;base64,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",
    langName: "C",
  },
  {
    img: "https://i0.wp.com/rank-brothers.com/wp-content/uploads/2021/07/how-to-check-python-version-featured-image.png?fit=1200%2C675&ssl=1",
    langName: "Python",
  },
  {
    img: "https://d1telmomo28umc.cloudfront.net/media/public/badges/JS.png",
    langName: "JavaScript",
  },
  {
    img: "https://d1telmomo28umc.cloudfront.net/media/public/badges/React_Z6rkrgv.png",
    langName: "React",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhU2azFVvSpOidu19kpvccTJjgIYOv8BQbKw&usqp=CAU",
    langName: "HTML5/CSS3",
  },
  {
    img: "https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript_psOTuYC.png",
    langName: "TypeScript",
  },
  {
    img: "https://miro.medium.com/max/1400/1*Xc1KiqXUORE-qACgm3lS3w.png",
    langName: "Styled-Components",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXIRiB_ideVv6UXblcvoC3yh__EszybXrRV-aePyJci_PnVLDv7beKrdtouPcjqAXriE&usqp=CAU",
    langName: "Recoil",
  },
  {
    img: "https://diarioinforme.com/wp-content/uploads/2021/02/Como-conservar-su-tienda-Redux.jpg",
    langName: "Redux",
  },
  {
    img: "data:image/png;base64,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",
    langName: "Webpack5",
  },
];

const ProfileForm = () => {
  const [index, setIndex] = useState<number>(0);
  const [leaving, setLeaving] = useState<boolean>(false);
  const offset = 3;

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const maxIndex = Math.floor(stackList.length / offset) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <ProfileContainer>
      <ProfileBoxWrap>
        <Fade direction="right">
          <ProfileTitle>Profile</ProfileTitle>
        </Fade>
        <Fade direction="right" delay={100}>
          <ProfileSubTitle>저를 소개합니다.</ProfileSubTitle>
        </Fade>
        <ProfileItemWrap>
          <Fade direction={"left"}>
            <ProfileBox>
              <article>
                <h2>Introduce.</h2>
                <ul>
                  <ol>
                    1. 현재 대구소프트웨어마이스터 고등학교에 재학 중입니다.
                    1학년 때부터 작은 토이프로젝트에서 크면 팀프로젝트 까지 여러
                    프로젝트를 진행했으며, <br />
                    <b>[기획, 개발, 유지/보수]</b> 등에 경험이 있습니다.
                  </ol>
                  <ol>
                    2. 나날이 발전하는 세상에서 새로운 스택을 배우며 응용 하는
                    것을 좋아합니다. 프로젝트를 진행할때 필요한 소통과 협업을
                    중요시합니다.
                  </ol>
                  <ol>
                    3. 협업을 하면서 코드의 가독성과 효율성, 리펙토링, 코드
                    스플릿 등과 같은 클린코딩에 대해 고민합니다.
                  </ol>
                  <ol>
                    4. 고민들이 자연스럽게 팀원들하고 이어져 소통하는 부분에서
                    즐거움을 느낍니다.
                  </ol>
                </ul>
              </article>
            </ProfileBox>
          </Fade>
          <Fade direction={"right"}>
            <ProfileCard>
              <ProfileCardCover
                bgPhoto={
                  "data:image/jpeg;base64,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"
                }
              >
                <ProfileCardImg src={Imgs.ProfileFace} />
              </ProfileCardCover>
              <ProfileCardOverviewWrap>
                <h1>임동현</h1>
                <h2>대구소프트웨어마이스터고등학교 재학중(프론트엔드)</h2>
                <h3>스택</h3>
                <SliderWrap>
                  <Slider>
                    <AnimatePresence
                      initial={false}
                      onExitComplete={toggleLeaving}
                    >
                      <Row
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween", duration: 1 }}
                        key={index}
                      >
                        {stackList
                          .slice(offset * index, offset * index + offset)
                          .map((stack, index) => {
                            return (
                              <ProfileStackBox key={index}>
                                <img src={stack.img} />
                              </ProfileStackBox>
                            );
                          })}
                      </Row>
                    </AnimatePresence>
                  </Slider>
                  <SliderBtn onClick={increaseIndex}>
                    <svg viewBox="0 0 20 20">
                      <path
                        fill="white"
                        d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                      ></path>
                    </svg>
                  </SliderBtn>
                </SliderWrap>
              </ProfileCardOverviewWrap>
            </ProfileCard>
          </Fade>
        </ProfileItemWrap>
      </ProfileBoxWrap>
    </ProfileContainer>
  );
};

export default ProfileForm;
