import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const Usuarios = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  > h3 {
    font-size: 22px;
    margin: 0 auto;
    margin-top: 30px;
    font-weight: bold;
    color: orange;
    cursor: pointer;
    text-decoration: underline;
    text-align: center;
    margin-bottom: 60px;
  }
`;

const Usuario = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 18px;
    font-weight: bold;

  }
  > button {
    color: black;
    height: 25px;
    border-radius: 5px;
    border: none;
    border: solid 1px black;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    font-weight: bold;
  }
`;

function ListUsuarios(props) {
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "joely-brito-franklin",
          },
        }
      )
      .then((participantes) => {
        setParticipantes(participantes.data);
      })
      .catch((error) => {
        alert("erro ao pegar lista de usuarios");
      });
  }, []);

  function apagaUsuario(id) {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "joely-brito-franklin",
          },
        }
      )
      .then(alert("Usuário Apagado"))
      .catch((error) => {
        console.log(error);
      });
  }

  function atualizaLista() {
    return participantes.map((participante) => {
      return (
        <Usuario>
          <p>{participante.name}</p>
          <button onClick={() => apagaUsuario(participante.id)}>Deletar</button>
        </Usuario>
      );
    });
  }

  function voltaPagina() {
    props.setPagina("CriarUsuario")
  }
  return (
    <Usuarios>
      <h3 onClick={voltaPagina}>Voltar para a página de cadastro</h3>
      {atualizaLista()}
    </Usuarios>
  );
}
export default ListUsuarios;
