import React from "react";
import HomePage from "./components/HomePage";
import ListTrips from "./components/ListTripsPage";
import styled from "styled-components";
import ApplicationForm from "./components/ApplicationFormPage";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <ApplicationForm />
    </Container>
  );
}

export default App;
