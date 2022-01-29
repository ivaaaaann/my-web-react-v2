import { useViewportScroll } from "framer-motion";
import { useState } from "react";
import { IProjectListProps, ProjectList } from "../../../Store/projectAtom";
import {
  BigProjectModalContainer,
  BigProjectModalGithubButton,
  BigProjectModalImg,
  BigProjectModalIntroWrap,
  BigProjectModalOverLay,
  BigProjectModalQuestionWrap,
  BigProjectModalQuestionText,
  BigProjectModalStack,
  BigProjectModalStackWrap,
  BigProjectModalText,
  BigProjectModalTitle,
} from "./BigProjectModal.style";

interface IbigProjectModalProps {
  projectId: string;
  onOverLayClick: () => void;
}

const BigProjectModal: React.FC<IbigProjectModalProps> = ({
  projectId,
  onOverLayClick,
}) => {
  const [projectData, setProjectData] = useState<IProjectListProps>(
    ProjectList[parseInt(projectId)]
  );
  const { scrollY } = useViewportScroll();

  return (
    <>
      <BigProjectModalOverLay
        onClick={onOverLayClick}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        scrollY={scrollY.get()}
      />
      <BigProjectModalContainer
        layoutId={`projectModal_${projectId}`}
        style={{ top: scrollY.get() + 150 }}
      >
        <BigProjectModalImg src={projectData.img} />
        <BigProjectModalIntroWrap>
          <BigProjectModalTitle>{projectData.title}</BigProjectModalTitle>
          <BigProjectModalStackWrap>
            {projectData.stacks.map((stack) => {
              return (
                <BigProjectModalStack>
                  <p>{stack}</p>
                </BigProjectModalStack>
              );
            })}
          </BigProjectModalStackWrap>
          <BigProjectModalQuestionWrap>
            <BigProjectModalQuestionText>소개</BigProjectModalQuestionText>
            <BigProjectModalText>{projectData.subTitle}</BigProjectModalText>
            {projectData.impression && (
              <>
                <BigProjectModalQuestionText>
                  느낀점은?
                </BigProjectModalQuestionText>
                <BigProjectModalText>
                  {projectData.impression}
                </BigProjectModalText>
              </>
            )}
            {projectData.field && (
              <>
                <BigProjectModalQuestionText>
                  맡은 역할은?
                </BigProjectModalQuestionText>
                <BigProjectModalText>{projectData.field}</BigProjectModalText>
              </>
            )}
            {projectData.learned && (
              <>
                <BigProjectModalQuestionText>
                  배운건?
                </BigProjectModalQuestionText>
                <BigProjectModalText>{projectData.learned}</BigProjectModalText>
              </>
            )}
          </BigProjectModalQuestionWrap>
          <BigProjectModalGithubButton
            onClick={() => window.open(projectData.githubLink, "_blank")}
          >
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
              }
            />
          </BigProjectModalGithubButton>
        </BigProjectModalIntroWrap>
      </BigProjectModalContainer>
    </>
  );
};

export default BigProjectModal;
