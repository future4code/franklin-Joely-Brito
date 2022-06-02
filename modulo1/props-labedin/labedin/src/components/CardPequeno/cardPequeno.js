import React from "react";
import styled from "styled-components";

const CardPequenoContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;

  > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

function CardPequeno(props) {
  return (
    <CardPequenoContainer>
      <img src={props.imagem} />
      <div>
        <p>
          <strong>{props.tipo}</strong>
          {props.texto}
        </p>
      </div>
    </CardPequenoContainer>
  );
}

export default CardPequeno;
