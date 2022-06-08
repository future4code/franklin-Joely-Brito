import Button from "./Button";
import FormContainer from "./Form";
import Title from "./Title";

function Step3(props) {
  return (
    <>
      <Title title="Etapa 3 - Informações gerais de ensino" />
      <FormContainer>
        <label>7 - por que você não terminou um curso de graduação?</label>
        <input />
        <label>8 - Você fez algum curso complementar?</label>
        <select>
          <option>Nenhum</option>
          <option>Curso Técnico</option>
          <option>Curso de Inglês</option>
        </select>
      </FormContainer>
      <Button nextStep={props.nextStep}/>
    </>
  );
}

export default Step3;
