import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;

`;

function Form() {
  return (
    <FormContainer>
      <label>1 - Qual seu nome?</label>
      <input />
      <label>2 - Qual sua idade?</label>
      <input />
      <label>3 - Qual seu email?</label>
      <input />
      <label>4 - Qual sua escolaridade?</label>
      <select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
      </select>
    </FormContainer>
  );
}

export default Form;
