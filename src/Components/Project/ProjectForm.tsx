import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useRecoilState } from "recoil";
import { categoryBtnClickAtom } from "../../Store/categoryBtnClickAtom";
import {
  ProjectCategoryBtn,
  ProjectCategoryBtnWrap,
  ProjectFormContainer,
  ProjectSubTitle,
  ProjectTitle,
  ProjectWrap,
} from "./ProjectForm.style";

const ProjectForm: React.FC = () => {
  const [isClick, setIsClick] = useRecoilState(categoryBtnClickAtom);

  return (
    <ProjectFormContainer>
      <ProjectWrap>
        <Fade direction="up">
          <ProjectTitle>Project</ProjectTitle>
        </Fade>
        <Fade direction="up" delay={500}>
          <ProjectSubTitle>저의 프로젝트를 소개합니다.</ProjectSubTitle>
        </Fade>
        <ProjectCategoryBtnWrap>
          <ProjectCategoryBtn isClick={isClick.toyBtnClick} name="toy">
            토이 프로젝트
          </ProjectCategoryBtn>
          <ProjectCategoryBtn isClick={isClick.teamBtnClick} name="team">
            팀 프로젝트
          </ProjectCategoryBtn>
        </ProjectCategoryBtnWrap>
      </ProjectWrap>
    </ProjectFormContainer>
  );
};

export default ProjectForm;
