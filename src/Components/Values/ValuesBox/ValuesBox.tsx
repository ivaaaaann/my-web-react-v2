import {
  ValuesBoxContainer,
  ValuesBoxContent,
  ValuesBoxVariants,
} from "./ValuesBox.style";

interface IValuesBoxProps {
  text: string;
  bgPhoto: string;
  title: string;
}

const ValuesBox: React.FC<IValuesBoxProps> = ({ text, bgPhoto, title }) => {
  return (
    <ValuesBoxContainer
      bgPhoto={bgPhoto}
      variants={ValuesBoxVariants}
      whileHover={"hover"}
      initial={"normal"}
    >
      <ValuesBoxContent>
        <h1>{title}</h1>
        <p>{text}</p>
      </ValuesBoxContent>
    </ValuesBoxContainer>
  );
};

export default ValuesBox;
