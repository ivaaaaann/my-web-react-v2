import { ValuesBoxContainer, ValuesBoxContent } from "./ValuesBox.style";

interface ValuesBoxProps {
  text: string;
  bgPhoto: string;
  title: string;
}

const ValuesBox: React.FC<ValuesBoxProps> = ({ text, bgPhoto, title }) => {
  return (
    <ValuesBoxContainer bgPhoto={bgPhoto}>
      <ValuesBoxContent>
        <h1>{title}</h1>
        <p>{text}</p>
      </ValuesBoxContent>
    </ValuesBoxContainer>
  );
};

export default ValuesBox;
