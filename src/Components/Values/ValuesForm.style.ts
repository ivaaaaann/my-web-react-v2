import styled from "styled-components";

export const ValuesContainer = styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: center;
  padding: 50px 0px;
  box-sizing: border-box;
`;

export const ValuesWrap = styled.div`
  width: 60%;
`;

export const ValuesTitle = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.main_color};
  font-weight: bold;
`;

export const ValuesSubTitle = styled.h2`
  font-size: 18px;
  color: gray;
  font-weight: 300;
  margin-top: 10px;
`;

export const ValuesBoxWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;
