import React from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { ContainerCards, Card } from "../pages/ListTripsPage";
import excluir from "../img/lixeira.svg"
import listar from "../img/olho.svg"


const ContainerButtons = styled.div`
display: flex;
margin-top: 80px;
justify-content: space-around;

> button {
    background-color: transparent;
    border: none;
}
`


function AdminHome() {
  return (
    <Home>
      <h1>Viagens</h1>
      <ContainerCards>
        <Card>
          <img />
          <p>Descrição da viagem</p>
          <ContainerButtons>
            <button>
                <img alt="Ícone de uma lixeira" src={excluir}/>
            </button>
            <button>
                <img alt="Ícone de um olho fechado" src={listar}/>
            </button>
          </ContainerButtons>
        </Card>
      </ContainerCards>
    </Home>
  );
}
export default AdminHome;
