import React from "react";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  > button {
  color: black;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  border: none;
  border: solid 1px black;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  font-weight: bold;
  }
`;
const Input = styled.input`
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
  height: 30px;
  border-radius: 5px;
  border: none;
  border: solid 1px black;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  background-color: #e8c210;
`;
function CriarUsuario() {
  return (
    <ContainerInputs>
      <Input placeholder="NOME" />
      <Input placeholder="E-MAIL" />
      <button>Criar Usuário</button>
    </ContainerInputs>
  );
}
export default CriarUsuario;
