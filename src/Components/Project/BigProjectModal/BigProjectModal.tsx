import { useViewportScroll } from "framer-motion";
import { useState } from "react";
import { IProjectListProps } from "../../../Store/projectAtom";
import {
  BigProjectModalContainer,
  BigProjectModalOverLay,
} from "./BigProjectModal.style";

interface IbigProjectModalProps {
  projectName: string;
  onOverLayClick: () => void;
}

const BigProjectModal: React.FC<IbigProjectModalProps> = ({
  projectName,
  onOverLayClick,
}) => {
  const [projectData, setProjectData] = useState<IProjectListProps>();
  const { scrollY } = useViewportScroll();
  console.log(projectName);

  return (
    <>
      <BigProjectModalOverLay
        onClick={onOverLayClick}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <BigProjectModalContainer
        layoutId={`movieModal_${projectName}`}
        style={{ top: scrollY.get() + 150 }}
      ></BigProjectModalContainer>
    </>
  );
};

export default BigProjectModal;
