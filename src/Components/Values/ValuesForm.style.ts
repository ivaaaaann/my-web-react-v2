import styled from "styled-components";

export const ValuesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 100px 0px;
  box-sizing: border-box;
  align-items: center;
`;

export const ValuesWrap = styled.div`
  width: 60%;
  display: flex;
`;

export const ValuesTitleWrap = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
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
  line-height: 30px;
`;

export const ValuesBoxWrap = styled.div`
  width: 572px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
`;
