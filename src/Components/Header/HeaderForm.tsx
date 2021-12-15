import { useEffect } from "react";
import useHeaderScroll from "../../Hooks/Header/useHeaderScroll";
import {
  headerVariants,
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
} from "./HeaderForm.style";

const HeaderForm: React.FC = () => {
  const { headerAnimation, scrollY } = useHeaderScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, [scrollY, headerAnimation]);

  return (
    <HeaderContainer
      variants={headerVariants}
      initial={"top"}
      animate={headerAnimation}
    >
      <HeaderWrap>
        <HeaderLogo>asdsad</HeaderLogo>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default HeaderForm;
