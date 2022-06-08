import styled from "styled-components";

const CustonTitleThank = styled.p`
  text-align: center;
  font-size: 20px;
`;
function TitleThank(props) {
  return <CustonTitleThank>{props.titlethank}</CustonTitleThank>;
}

export default TitleThank;