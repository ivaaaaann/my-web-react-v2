import { useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HeroContainer, HeroCover, HeroTitle } from "./HeroForm.style";

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
      <HeroCover
        heroPhoto={"https://t1.daumcdn.net/cfile/tistory/244FE24C527A0CDF18"}
      />
      <HeroTitle isTop={isTop} startPoint={500} placement={400}>
        제 포트폴리오를 소개합니다.
      </HeroTitle>
      <HeroTitle isTop={isTop} startPoint={-500} placement={500}>
        자세히 봐주시면 감사하겠습니다.
      </HeroTitle>
    </HeroContainer>
  );
};

export default HeroForm;
