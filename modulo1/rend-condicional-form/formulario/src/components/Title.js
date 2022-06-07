import styled from "styled-components";

const CustonTitle = styled.h1`
  text-align: center;
`;
function Title(props) {
  return <CustonTitle>{props.title}</CustonTitle>;
}

export default Title;
