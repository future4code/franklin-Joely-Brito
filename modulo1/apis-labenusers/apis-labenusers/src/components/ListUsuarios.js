import React from "react";
import styled from "styled-components";

const Usuarios = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const Usuario = styled.div`
  display: flex;
  align-items: center;

  >p {
    font-size:18px;
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

function ListUsuarios() {
  return (
    <Usuarios>
      <Usuario>
        <p>Ninguem</p>
        <button>Deletar</button>
      </Usuario>
      <Usuario>
        <p>Ninguem</p>
        <button>Deletar</button>
      </Usuario>
      <Usuario>
        <p>Ninguem</p>
        <button>Deletar</button>
      </Usuario>
    </Usuarios>
  );
}
export default ListUsuarios;
