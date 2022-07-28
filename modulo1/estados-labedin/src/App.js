import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Publication = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > input {
    width: 300px;
    height: 20px;
    background-color: #cdcdc6;
    border: none;
    border: 1px solid #45214a;
    border-radius: 3px;
    font-size: 1rem;
    color: white;
    margin-bottom: 5px;
  }

  > button {
    border: none;
    border-radius: 3px;
    border: 1px solid #45214a;
    margin-bottom: 8px;
  }
`;
function App() {
  const [post, setPost] = useState([
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150?random=1",
    },
    {
      nomeUsuario: "Ricardo",
      fotoUsuario: "https://i.pravatar.cc/50?img=6",
      fotoPost: "https://picsum.photos/200/150?random=2",
    },
    {
      nomeUsuario: "Matheus",
      fotoUsuario: "https://i.pravatar.cc/50?img=9",
      fotoPost: "https://picsum.photos/200/150?random=3",
    },
  ]);

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState("");
  const [fotoPost, setFotoPost] = useState("");

  const onChangeInputNome = (event) => {
    setNomeUsuario(event.target.value);
  };

  const onChangeFotoUsuario = (event) => {
    setFotoUsuario(event.target.value);
  };

  const onChangeFotoPost = (event) => {
    setFotoPost(event.target.value);
  };

  const AdicionaPost = () => {
    const novoPost = {
      nomeUsuario: nomeUsuario,
      fotoUsuario: fotoUsuario,
      fotoPost: fotoPost,
    };
    const novoCard = [...post, novoPost];

    setPost(novoCard);
    setNomeUsuario("");
    setFotoUsuario("");
    setFotoPost("");
  };

  const cards = post.map((post) => {
    return (
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    );
  });

  return (
    <MainContainer>
      <Publication>
        <input
          value={nomeUsuario}
          onChange={onChangeInputNome}
          placeholder={"usuario"}
        />
        <input
          value={fotoUsuario}
          onChange={onChangeFotoUsuario}
          placeholder={"foto do perfil"}
        />
        <input
          value={fotoPost}
          onChange={onChangeFotoPost}
          placeholder={"imagem do post"}
        />
        <button onClick={AdicionaPost}>Publicar</button>
      </Publication>
      {cards}
    </MainContainer>
  );
}

export default App;
