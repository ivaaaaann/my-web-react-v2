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
  HeroButton,
  HeroSNSWrap,
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
            <article>
              <HeroButton
                onClick={() =>
                  window.open("https://github.com/ldh3907", "_blank")
                }
              >
                Go to Github
              </HeroButton>
              <HeroSNSWrap>
                <svg
                  viewBox="0 0 20 20"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/do0ng_hyun/?hl=kokslajdalkdjwi",
                      "_blank"
                    )
                  }
                >
                  <path
                    fill="white"
                    d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"
                  />
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100014551603753",
                      "_blank"
                    )
                  }
                >
                  <path
                    fill="white"
                    d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                  />
                </svg>
              </HeroSNSWrap>
            </article>
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
