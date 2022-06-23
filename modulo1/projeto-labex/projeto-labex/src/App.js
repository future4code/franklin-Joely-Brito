import React from "react";
import HomePage from "./components/HomePage";
import ListTrips from "./components/ListTripsPage";
import styled from "styled-components";
import ApplicationForm from "./components/ApplicationFormPage";
import Login from "./components/LoginPage";
import AdminHome from "./components/AdminHomePage";
import TripDetails from "./components/TripDetailsPage";
import CreateTrip from "./components/CreateTripPage";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <CreateTrip />
    </Container>
  );
}

export default App;
