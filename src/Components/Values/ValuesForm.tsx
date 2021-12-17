import React from "react";
import { Fade } from "react-awesome-reveal";
import ValuesBox from "./ValuesBox";
import {
  ValuesBoxWrap,
  ValuesContainer,
  ValuesSubTitle,
  ValuesTitle,
  ValuesWrap,
} from "./ValuesForm.style";

interface valuesArrProps {
  bgPhoto: string;
  title: string;
  text: string;
  delay: number;
}

const Values: valuesArrProps[] = [
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
        <Fade direction="right">
          <ValuesTitle>Values</ValuesTitle>
        </Fade>
        <Fade direction="right" delay={100}>
          <ValuesSubTitle>제가 추구하는 것들입니다.</ValuesSubTitle>
        </Fade>
        <ValuesBoxWrap>
          {Values.map((value) => {
            return (
              <Fade direction="up" delay={value.delay}>
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
