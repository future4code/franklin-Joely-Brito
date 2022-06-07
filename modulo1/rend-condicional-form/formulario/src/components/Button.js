import styled from "styled-components";

const CustonButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 auto;
`;
function Button(props) {
  return <CustonButtom onClick={props.nextStep}>Próxima Etapa</CustonButtom>;
}

export default Button;
