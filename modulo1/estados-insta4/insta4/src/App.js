import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150?random=1"}
      />

      <Post
        nomeUsuario={"Ricardo"}
        fotoUsuario={"https://i.pravatar.cc/50?img=6"}
        fotoPost={"https://picsum.photos/200/150?random=2"}
      />

      <Post
        nomeUsuario={"Matheus"}
        fotoUsuario={"https://i.pravatar.cc/50?img=9"}
        fotoPost={"https://picsum.photos/200/150?random=3"}
      />
    </MainContainer>
  );
}

export default App;
