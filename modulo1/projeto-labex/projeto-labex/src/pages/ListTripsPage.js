import React, { useEffect, useState } from "react";
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
  flex-wrap: wrap;
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

  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trips"
      )
      .then((resposta) => {
        setTrips(resposta.data.trips);
      })
      .catch((error) => {
        alert("Não foi possivel mostar as viagens!!");
      });
  }, []);
  const goToApplicationForm = (id) => {
    navigate(`/trips/application/${id}`);
  };

  function listaDeViagens() {
    return trips.map((trip) => {
      return (
        <Card onClick={() => goToApplicationForm(trip.id)}>
         <h4>{trip.name}</h4>
         <p>{trip.description}</p>
         <p>Data: {trip.date}</p>
         <p>Duração: {trip.durationInDays}</p>
         <p>Local: {trip.planet}</p>

        </Card>
      );
    });
  }
  return (
    <Home>
      <h1>Destinos</h1>
      <ContainerCards>
        {listaDeViagens()}
      </ContainerCards>
    </Home>
  );
}
export default ListTrips;
