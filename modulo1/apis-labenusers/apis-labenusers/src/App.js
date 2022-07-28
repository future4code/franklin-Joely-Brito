import CriarUsuario from "./components/CriarUsuario";
import styled from "styled-components";
import ListUsuarios from "./components/ListUsuarios";
import { useState } from "react";

const ContainerItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function App() {
  const [pagina, setPagina] = useState("CriarUsuario");
  const controleDePaginas = () => {
    if (pagina === "CriarUsuario") {
      return <CriarUsuario setPagina={setPagina} />;
    } else {
      return <ListUsuarios setPagina={setPagina}/>;
    }
  };
  return <ContainerItens>{controleDePaginas()}</ContainerItens>;
}

export default App;
