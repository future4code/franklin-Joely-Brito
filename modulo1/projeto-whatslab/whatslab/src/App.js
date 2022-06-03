import Container from "./components/Container";
import Inputs from "./components/Inputs";
import Entradas from "./components/Entradas";
import React, { useState } from "react";

function App() {
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputMensagem, setInputmensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);

  const conversa = () => {
    const adicionaConversa = {
      usuario: inputUsuario,
      mensagem: inputMensagem,
    };

    const novasMensagens = [...mensagens, adicionaConversa];

    setMensagens(novasMensagens);
    setInputUsuario("");
    setInputmensagem("");
  };

  const onchangeInputUsuario = (event) => {
    setInputUsuario(event.target.value);
  };

  const onchangeInputMensagem = (event) => {
    setInputmensagem(event.target.value);
  };

  const listaMensagens = mensagens.map((mensagem) => {
    return (
      <p>
        {mensagem.usuario}: {mensagem.mensagem}
      </p>
    );
  });

  return (
    <Container>
      <div>{listaMensagens}</div>
      <Inputs>
        <Entradas>
          <input
            placeholder={"Usuario"}
            onChange={onchangeInputUsuario}
            value={inputUsuario}
          />
          <input
            placeholder="Mensagem"
            onChange={onchangeInputMensagem}
            value={inputMensagem}
          />
          <button onClick={conversa}>Enviar</button>
        </Entradas>
      </Inputs>
    </Container>
  );
}

export default App;
