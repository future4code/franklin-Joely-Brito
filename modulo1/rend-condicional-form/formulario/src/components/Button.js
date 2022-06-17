import styled from "styled-components";

const CustonButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 0 auto;
  width:130px;
  height: 25px;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: bold;
`;
function Button(props) {
  return <CustonButtom onClick={props.nextStep}>Próxima Etapa</CustonButtom>;
}

export default Button;
