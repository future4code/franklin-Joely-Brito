import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/cardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/98559997?v=4"
          nome="Joely Brito"
          descricao="Ola pessoal, sou aluna da trilha full-stack da Labenu e estou adorando aprender coisas novas diariamente e o melhor de tudo e que todos são muito legais e divertidos"
        />

        <ImagemButton
          imagem="https://i.pinimg.com/564x/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.jpg"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/474x/03/cc/05/03cc05380d4459de56e92c6746c45162.jpg"
          texto="joely_brito@alunolabenu.com"
          tipo="Email: "
        />

        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
          texto="Rua sem saída   N°0001"
          tipo="Endereço: "
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://thumbs.dreamstime.com/b/crian%C3%A7as-com-f%C3%B3rmula-n%C3%BAmero-e-%C3%ADcones-da-matem%C3%A1tica-82001686.jpg"
          nome="Professora"
          descricao="Ministrei aulas de Matemática para alunos do ensino médio"
        />

        <CardGrande
          imagem="https://st3.depositphotos.com/1768926/18971/v/600/depositphotos_189711044-stock-illustration-cake-ilustration-logo-vector.jpg"
          nome="Confeiteira"
          descricao="Atuava na produção de bolos e sobremesas"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
