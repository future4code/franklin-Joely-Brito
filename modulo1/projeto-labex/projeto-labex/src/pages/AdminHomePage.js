import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { ContainerCards, Card } from "../pages/ListTripsPage";
import excluir from "../img/lixeira.svg";
import listar from "../img/olho.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContainerButtons = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: space-around;

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

function AdminHome() {
  const navigate = useNavigate();
  const goToCreateTrip = () => {
    navigate("/admin/trips/create");
  };

  const goToTripDetails = (tripId) => {
    navigate(`/admin/trips/${tripId}`);
  };

  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        alert("Error aos buscar viagens!");
      });
  });
  function listaViagens() {
    return trips.map((trip) => {
      return (
        <Card key={trip.id}>
          <p>{trip.planet}</p>
          <p>{trip.description}</p>
          <ContainerButtons>
            <button>
              <img alt="Ícone de uma lixeira" src={excluir} />
            </button>
            <button onClick={() => goToTripDetails(trip.id)}>
              <img alt="Ícone de um olho aberto" src={listar} />
            </button>
          </ContainerButtons>
        </Card>
      );
    });
  }

  return (
    <Home>
      <h1>Viagens</h1>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <ContainerCards>
        {listaViagens()}
      </ContainerCards>
    </Home>
  );
}
export default AdminHome;
