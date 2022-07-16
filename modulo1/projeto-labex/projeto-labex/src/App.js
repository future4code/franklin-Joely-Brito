import React from "react";
import styled from "styled-components";
import { Router } from "./routes/Routes";


const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
