import { useAnimation, useViewportScroll } from "framer-motion";

const useHeaderScroll = () => {
  const headerAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  return { headerAnimation, scrollY };
};

export default useHeaderScroll;
