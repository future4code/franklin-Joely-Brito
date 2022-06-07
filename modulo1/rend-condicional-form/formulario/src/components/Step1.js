import Button from "./Button";
import FormContainer from "./Form";
import Title from "./Title";

function Step1(props) {
  return (
    <>
      <Title title="Etapa 1 - Dados Gerais" />
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
      <Button nextStep={props.nextStep} />
    </>
  );
}

export default Step1;
