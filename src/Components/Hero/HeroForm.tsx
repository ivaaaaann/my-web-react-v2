import { useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  HeroContainer,
  HeroBg,
  HeroTitle,
  HeroCover,
  HeroCoverWrap,
  HeroProfileBoxWrap,
  HeroProfileBox,
} from "./HeroForm.style";

const HeroForm: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() >= 20) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    });
  }, [scrollY]);

  return (
    <HeroContainer>
      <HeroBg
        heroPhoto={"https://t1.daumcdn.net/cfile/tistory/244FE24C527A0CDF18"}
      />
      <HeroProfileBoxWrap>
        <Fade direction="up">
          <HeroProfileBox>
            <HeroTitle fontSize={55}>I'm</HeroTitle>
            <div>
              <HeroTitle fontSize={55} isMainFont>
                DONG HYUN
              </HeroTitle>
              <HeroTitle fontSize={55}>LIM</HeroTitle>
            </div>
            <HeroTitle fontSize={20}>Introducing my portfolio!</HeroTitle>
          </HeroProfileBox>
        </Fade>
      </HeroProfileBoxWrap>
      <HeroCoverWrap>
        <Fade direction={"right"}>
          <HeroCover />
        </Fade>
      </HeroCoverWrap>
    </HeroContainer>
  );
};

export default HeroForm;
