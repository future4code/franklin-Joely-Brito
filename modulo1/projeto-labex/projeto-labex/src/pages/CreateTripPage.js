import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Select = styled.select`
  width: 310px;
  height: 30px;
  border: none;
  border: 1px solid #001524;
  margin-bottom: 8px;
  border-radius: 5px;
  padding-left: 8px;
`;

function CreateTrip() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    }
  }, []);

  function inputName(event) {
    setName(event.target.value);
  }

  function inputPlanet(event) {
    setPlanet(event.target.value);
  }

  function inputDate(event) {
    setDate(event.target.value);
  }

  function inputDescription(event) {
    setDescription(event.target.value);
  }

  function inputDurationInDays(event) {
    setDurationInDays(event.target.value);
  }

  function criarViagem() {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trips",
        {
          name: name,
          planet: planet,
          date: date,
          description: description,
          durationInDays: durationInDays,
        },
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert("Viagem criada com sucesso!");
      })
      .catch((error) => {
        alert("Não foi possível criar a viagem!");
      });
  }
  return (
    <Home>
      <h1>Criar nova viagem</h1>
      <Form>
        <input
          placeholder="Nome"
          value={name}
          onChange={inputName}
          type={"text"}
          pattern={"[A-z]{5,}"}
          title={"O nome deve conter no mínimo 5 letras!"}
          required
        />

        <Select
          placeholder="Planeta"
          value={planet}
          onChange={inputPlanet}
          required
        >
          <option>Escolha um destino</option>
          <option value={"mercúrio"}>Mercúrio</option>
          <option value={"vênus"}>Vênus</option>
          <option value={"terra"}>Terra</option>
          <option value={"marte"}>Marte</option>
          <option value={"jupiter"}>Júpiter</option>
          <option value={"saturno"}>Saturno</option>
          <option value={"urano"}>Urano</option>
          <option value={"netuno"}>Netuno</option>
        </Select>

        <input
          placeholder="Data"
          value={date}
          onChange={inputDate}
          type={"date"}
          required
        />
        <input
          placeholder="Descrição"
          value={description}
          onChange={inputDescription}
          type={"text"}
          pattern={"[A-z]{30,}"}
          title={"A descrição deve conter no mínimo 30 letras!"}
          required
        />
        <input
          placeholder="Duração em dias"
          value={durationInDays}
          onChange={inputDurationInDays}
          type={"number"}
          pattern={"[0-9]{50,}"}
          title={"A viagem deve ter uma duração de pelo menos 50 dias!"}
          required
        />
        <button onSubmit={criarViagem}>Criar Viagem</button>
      </Form>
    </Home>
  );
}
export default CreateTrip;
