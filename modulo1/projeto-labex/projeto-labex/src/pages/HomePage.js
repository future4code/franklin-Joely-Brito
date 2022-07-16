import React from "react";
import styled from "styled-components";
import user from "../img/user.svg";
import adm from "../img/adm.svg";
import { useNavigate } from "react-router-dom"

export const Home = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;

  > h1 {
    color: #15616d;
    margin-bottom: 80px;
    font-size: 40px;
  }
`;

const Button = styled.button`
  height: 150px;
  width: 150px;
  border: none;
  margin-right: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #e0ca3c;
  border-radius: 50%;
  cursor: pointer;

  > img {
    width: 100px;
    height: 100px;
  }
`;
function HomePage() {
  const navigate = useNavigate()

  const goToListTrips = () => {
    navigate("/trips/list")
  }

  const goToLogin = () => {
    navigate("/login")
  }
  return (
    <Home>
      <h1>Bem Vindo a Labex</h1>
      <div>
        <Button onClick={goToListTrips}>
          <img alt="Ícone de usuário" src={user} />
        </Button>
        <Button onClick={goToLogin}>
          <img alt="Ícone de administrador" src={adm} />
        </Button>
      </div>
    </Home>
  );
}

export default HomePage;
