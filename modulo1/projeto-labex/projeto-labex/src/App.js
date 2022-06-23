import React from "react";
import HomePage from "./components/HomePage";
import ListTrips from "./components/ListTripsPage";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <ListTrips />
    </Container>
  );
}

export default App;
