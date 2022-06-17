import CriarUsuario from "./components/CriarUsuario";
import styled from "styled-components";
import ListUsuarios from "./components/ListUsuarios";

const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function App() {
  return (
    <ContainerItens>
      <CriarUsuario />
    </ContainerItens>
  );
}

export default App;
