import { AnimatePresence, useViewportScroll } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categoryBtnClickAtom } from "../../Store/categoryBtnClickAtom";
import { projectAtom, ProjectList } from "../../Store/projectAtom";
import BigProjectModal from "./BigProjectModal";

import {
  ProjectBox,
  ProjectBoxImg,
  ProjectBoxInfo,
  ProjectBoxSubTitle,
  ProjectBoxTitle,
  ProjectBoxVariants,
  ProjectBoxWrap,
  ProjectCategoryBtn,
  ProjectCategoryBtnWrap,
  ProjectFormContainer,
  ProjectSubTitle,
  ProjectTitle,
  ProjectWrap,
} from "./ProjectForm.style";

const ProjectForm: React.FC = () => {
  const [isClick, setIsClick] = useRecoilState(categoryBtnClickAtom);
  const [projectList, setProjectList] = useRecoilState(projectAtom);
  const history = useHistory();

  const { scrollY } = useViewportScroll();

  const bigProjectMatch = useRouteMatch<{ projectName: string }>(
    "/bigProject/:projectName"
  );

  console.log(bigProjectMatch);

  const onBoxClick = (projectName: string) => {
    history.push(`/bigProject/${projectName}`);
    const scrollY = document.body.style.top;
    document.body.style.cssText = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  const onOverLayClick = () => history.push("/");

  const ToggleCategory = (categoryName: string): void => {
    setProjectList(ProjectList);
    setProjectList((prev) =>
      prev.filter((project) => project.type === categoryName)
    );
    switch (categoryName) {
      case "toy":
        setIsClick({
          toyBtnClick: true,
          teamBtnClick: false,
        });
        break;
      case "team":
        setIsClick({
          toyBtnClick: false,
          teamBtnClick: true,
        });

        break;

      default:
        setIsClick({
          toyBtnClick: true,
          teamBtnClick: false,
        });

        break;
    }
  };

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
          <ProjectCategoryBtn
            isClick={isClick.toyBtnClick}
            name="toy"
            onClick={(event) =>
              ToggleCategory((event.target as HTMLTextAreaElement).name)
            }
          >
            토이 프로젝트
          </ProjectCategoryBtn>
          <ProjectCategoryBtn
            isClick={isClick.teamBtnClick}
            name="team"
            onClick={(event) =>
              ToggleCategory((event.target as HTMLTextAreaElement).name)
            }
          >
            팀 프로젝트
          </ProjectCategoryBtn>
        </ProjectCategoryBtnWrap>
        <ProjectBoxWrap>
          <AnimatePresence>
            {projectList.map((project, index) => {
              return (
                <Fade direction="bottom-right" delay={index * 100} key={index}>
                  <ProjectBox
                    variants={ProjectBoxVariants}
                    initial={"normal"}
                    whileHover={"hover"}
                    layoutId={`movieModal_${project.title}`}
                    onClick={() => onBoxClick(project.title)}
                  >
                    <ProjectBoxImg src={project.img} />
                    <ProjectBoxInfo>
                      <ProjectBoxTitle>{project.title}</ProjectBoxTitle>
                      <ProjectBoxSubTitle>
                        {project.subTitle}
                      </ProjectBoxSubTitle>
                    </ProjectBoxInfo>
                  </ProjectBox>
                </Fade>
              );
            })}
          </AnimatePresence>
        </ProjectBoxWrap>
      </ProjectWrap>
      <AnimatePresence>
        {bigProjectMatch && (
          <BigProjectModal
            onOverLayClick={onOverLayClick}
            projectName={bigProjectMatch.params.projectName}
          />
        )}
      </AnimatePresence>
    </ProjectFormContainer>
  );
};

export default ProjectForm;
