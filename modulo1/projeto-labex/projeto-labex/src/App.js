import React from "react";
import HomePage from "./components/HomePage";
import ListTrips from "./components/ListTripsPage";
import styled from "styled-components";
import ApplicationForm from "./components/ApplicationFormPage";
import Login from "./components/LoginPage";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default App;
