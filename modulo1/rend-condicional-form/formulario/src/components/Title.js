import styled from "styled-components";

const CustonTitle = styled.h2`
  text-align: center;
  padding-top:64px;
`;
function Title(props) {
  return <CustonTitle>{props.title}</CustonTitle>;
}

export default Title;
