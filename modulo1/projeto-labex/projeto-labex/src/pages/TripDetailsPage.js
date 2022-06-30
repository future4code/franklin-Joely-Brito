import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Card, ContainerCards } from "../pages/ListTripsPage";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TripDetails() {
  const pathParams = useParams();
  const [trip, setTrip] = useState([]);
  const [candidetes, setCandidetes] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trip/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
        setCandidetes(response.data.trip.candidates);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  function candidatos() {
    return candidetes.map((candidato) => {
      return (
        <Card key={candidato.id}>
          <p>{candidato.name}</p>
          <p>{candidato.applicationText}</p>
        </Card>
      );
    });
  }
  return (
    <Home>
      <h1>Viagem</h1>
      <p>{trip.name}</p>
      <ContainerCards>{candidatos()}</ContainerCards>
    </Home>
  );
}
export default TripDetails;
