import React from "react";
import { Fade } from "react-awesome-reveal";
import ValuesBox from "./ValuesBox";
import {
  ValuesBoxWrap,
  ValuesContainer,
  ValuesSubTitle,
  ValuesTitle,
  ValuesTitleWrap,
  ValuesWrap,
} from "./ValuesForm.style";

interface IvaluesArrProps {
  bgPhoto: string;
  title: string;
  text: string;
  delay: number;
}

const Values: IvaluesArrProps[] = [
  {
    bgPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_33w_MF7o9adhtNGSPH-dkgm6rzt0P5RPg&usqp=CAU",
    title: "협업",
    text: "협업하는 과정에서 소통을 중요시합니다.",
    delay: 100,
  },
  {
    bgPhoto: "https://t1.daumcdn.net/cfile/tistory/995A17455A409C9A28",
    title: "가독성/효율성",
    text: "유지/보수를 위해 평소에 가독성있고 효율성있는 코드를 작성하려고 노력합니다. 리펙토링, 코드 스플릿에 대해 고민합니다.",
    delay: 200,
  },
  {
    bgPhoto:
      "https://www.sciencetimes.co.kr/wp-content/uploads/2019/10/1-1.%EA%B8%B0%EC%88%A0%ED%98%81%EC%8B%A0%EC%9D%B4-%EA%B0%80%EC%A0%B8%EC%98%AC-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%98-%EB%B3%80%ED%99%94.jpg",
    title: "기술",
    text: "계속해서 나오는 신기술을 유연하게 응용하도록 노력합니다. 새로운 것을 접하는걸 좋아합니다.",
    delay: 300,
  },
  {
    bgPhoto:
      "https://post-phinf.pstatic.net/MjAxNzEyMDVfMTM0/MDAxNTEyNDU1ODQ3NTU3.zWfpfFTipgeVVRl0p4dkJW6VCKccQXAJieZk9Dd0nlUg._Jcg380VC8DoKg7G7V-FDBEnh3Bso-By8spcyptBDWMg.JPEG/yaytg399577.jpg?type=w1200",
    title: "이해",
    text: "배울 때면 깊게 이해하기 위해 노력합니다.",
    delay: 400,
  },
];

const ValuesForm: React.FC = () => {
  return (
    <ValuesContainer>
      <ValuesWrap>
        <ValuesTitleWrap>
          <Fade direction="right">
            <ValuesTitle>Values</ValuesTitle>
          </Fade>
          <Fade direction="right" delay={100}>
            <ValuesSubTitle>
              저는 다음 4가지가 능숙한 프론트엔드가 가장 이상적인 프론트엔드
              개발자라고 생각합니다. 다음 4가지를 정한 이유는 첫번째 협업 은
              개발자라면 당연히 갖춰야 하는 능력이기 때문입니다. 두번째 코드의
              가독성과 효율성은 유지/보수를 해야한다면 필연적으로 따라오는
              것이라고 생각하기 때문입니다. 세번째 기술은 프론트 분야에서는
              빠르게 발전중입니다. 그래서 그 기술을 유연하게 받아들이고 접목
              시키는 것이 중요하다고 생각하기 때문입니다. 네번째 이해는 기술을
              유연하게 접목 시키기 위해선 깊게 알고 원리를 이해해야 가능하다고
              생각하기 때문입니다. 저는 개발에 임할때면 다음 4가지를 항상
              생각하며 개발합니다.
            </ValuesSubTitle>
          </Fade>
        </ValuesTitleWrap>
        <ValuesBoxWrap>
          {Values.map((value, index) => {
            return (
              <Fade direction="up" delay={value.delay} key={index}>
                <ValuesBox
                  title={value.title}
                  text={value.text}
                  bgPhoto={value.bgPhoto}
                />
              </Fade>
            );
          })}
        </ValuesBoxWrap>
      </ValuesWrap>
    </ValuesContainer>
  );
};

export default ValuesForm;
