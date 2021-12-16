import { useEffect, useState } from "react";
import useHeaderScroll from "../../Hooks/Header/useHeaderScroll";
import Logo from "../../asset/img/Logo.svg";
import WhiteLogo from "../../asset/img/WhiteLogo.svg";
import {
  headerVariants,
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
} from "./HeaderForm.style";

const HeaderForm: React.FC = () => {
  const { headerAnimation, scrollY } = useHeaderScroll();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, [scrollY, headerAnimation]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        setIsTop(false);
      } else {
        setIsTop(true);
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
        {isTop ? <HeaderLogo src={WhiteLogo} /> : <HeaderLogo src={Logo} />}
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default HeaderForm;
