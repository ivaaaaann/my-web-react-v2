import { useViewportScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HeroContainer, HeroCover } from "./HeroForm.style";

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
    </HeroContainer>
  );
};

export default HeroForm;
