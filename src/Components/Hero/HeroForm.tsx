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
      <HeroTitle isTop={isTop} startPoint={-500} isRight={false}></HeroTitle>
      <HeroTitle isTop={isTop} startPoint={500} isRight={true}>
        <div>
          <article>
            <h1>이름 : 임동현</h1>
            <h2>Connect.</h2>
            <h3>📞 : 010-2797-3907</h3>
            <h3>📧 : ldh165163@gmail.com</h3>
            <h4
              onClick={() =>
                window.open("https://github.com/ldh3907", "_blank")
              }
            >
              🐈‍⬛ : ldh3907
            </h4>
          </article>
          <img />
        </div>
        <hr />
        <article>
          <h2>Introduce.</h2>
          <ul>
            <li>
              1. 현재 대구소프트웨어마이스터 고등학교에 재학 중입니다. 1학년
              때부터 작은 토이프로젝트에서 크면 팀프로젝트 까지 여러 프로젝트를
              진행했으며, <br />
              <b>[기획, 개발, 유지/보수]</b> 등에 경험이 있습니다.
            </li>
            <li>
              2. 나날이 발전하는 세상에서 새로운 스택을 배우며 응용 하는 것을
              좋아합니다. 프로젝트를 진행할때 필요한 소통과 협업을 중요시합니다.
            </li>
            <li>
              3. 협업을 하면서 코드의 가독성과 효율성, 리펙토링, 코드 스플릿
              등과 같은 클린코딩에 대해 고민합니다.
            </li>
            <li>
              4. 고민들이 자연스럽게 팀원들하고 이어져 소통하는 부분에서
              즐거움을 느낍니다.
            </li>
          </ul>
        </article>
      </HeroTitle>
    </HeroContainer>
  );
};

export default HeroForm;
