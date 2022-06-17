import Button from "./Button";
import FormContainer from "./Form";
import Title from "./Title";

function Step2(props) {
  return (
    <>
      <Title title="Etapa 2 - Informações do ensino superior"/>
      <FormContainer>
      <label>5 - Qual curso?</label>
        <input />
        <label>6 - Qual a unidade de ensino?</label>
        <input />
      </FormContainer>
      <Button nextStep={props.nextStep}/>
    </>
  );
}

export default Step2;
