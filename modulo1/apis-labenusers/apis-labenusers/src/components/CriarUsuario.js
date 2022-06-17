import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

  >p {
    font-size: 22px;
    margin: 0 auto;
    margin-top: 30px;
    font-weight: bold;
    color: orange;
    cursor: pointer;
    text-decoration: underline;
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
function CriarUsuario(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onChangeName (event) {
    setName(event.target.value)
  }

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  const criaUsuario = () => {
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        name: name,
        email: email,
      },
      {
        headers: {
          Authorization: "joely-brito-franklin",
        },
      }
    ).then(() => {
        alert("Usuário Criado")
    }).catch(() => {
        alert("Erro ao criar uauário")
    })

  };

  function alteraPagina() {
    props.setPagina("ListaParticipantes")
  }
  return (
    <ContainerInputs>
      <Input placeholder="NOME" value={name} onChange={onChangeName}/>
      <Input placeholder="E-MAIL" value={email} onChange={onChangeEmail}/>
      <button onClick={criaUsuario}>Criar Usuário</button>
      <p onClick={alteraPagina}>Lista de usuários</p>
    </ContainerInputs>
  );
}
export default CriarUsuario;
