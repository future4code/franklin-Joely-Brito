import React, { useEffect } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ContainerCards = styled.div`
  display: flex;
`;
export const Card = styled.div`
  display: flex;
  width: 200px;
  height: 300px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #8783d1;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
    align-self: center;
  }
`;
function ListTrips() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trips"
      )
      .then((resposta) => {
        console.log(resposta.data.trips);
      });
  }, []);
  const goToApplicationForm = () => {
    navigate("/trips/application");
  };

  return (
    <Home>
      <h1>Destinos</h1>
      <ContainerCards>
        <Card onClick={goToApplicationForm}>
          <img />
          <p>Local</p>
          <p>Descrição:</p>
          <p>Data:</p>
        </Card>

        <Card>
          <img />
          <p>Local:</p>
          <p>Descrição:</p>
          <p>Data:</p>
        </Card>

        <Card>
          <img />
          <p>Local</p>
          <p>Descrição:</p>
          <p>Data:</p>
        </Card>
      </ContainerCards>
    </Home>
  );
}
export default ListTrips;
