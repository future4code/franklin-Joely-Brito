import React, { useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f24e1e;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  > input {
    width: 300px;
    height: 30px;
    border: none;
    border: 1px solid #001524;
    margin-bottom: 8px;
    border-radius: 5px;
    padding-left: 8px;
  }

  > button {
    height: 30px;
    width: 200px;
    border: none;
    border: 1px solid #001524;
    border-radius: 5px;
    align-self: center;
    background-color: #f8a58b;
    cursor: pointer;
  }
`;
function ApplicationForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const pathParams = useParams();

  function inputName(event) {
    setName(event.target.value);
  }

  function inputAge(event) {
    setAge(event.target.value);
  }

  function inputApplicationText(event) {
    setApplicationText(event.target.value);
  }

  function inputProfession(event) {
    setProfession(event.target.value);
  }

  function inputCountry(event) {
    setCountry(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    if (age >= 18) {
      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/trips/${pathParams.id}/apply`,
          {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
          }
        )
        .then(() => {
          alert("Se prepare para sua viagem");
          setName("");
          setAge("");
          setApplicationText("");
          setProfession("");
          setCountry("");
        })
        .catch(() => {
          alert("Não foi possivel fazer sua reserva!");
        });
    } else {
      alert("Você precisa ter no mínimo 18 anos");
    }
  }
  return (
    <Home>
      <h1>Formulário de interesse</h1>
      <Form>
        <input
          required
          placeholder="Nome"
          value={name}
          onChange={inputName}
          pattern={"[A-z]{3,}"}
          title={"Insira pelo menos três letras!"}
          type={"text"}
        />
        <input
          required
          placeholder="Idade"
          value={age}
          onChange={inputAge}
          pattern={"[0-9]"}
          title={"Deve ser maior que 18 anos"}
          type={"number"}
        />
        <input
          required
          placeholder="Interesse pela viagem"
          value={applicationText}
          onChange={inputApplicationText}
          pattern={"[A-z]{30,}"}
          title={"Deve ter no minimo 30 caracteres"}
          type={"text"}
        />
        <input
          required
          placeholder="Profissão"
          value={profession}
          onChange={inputProfession}
          pattern={"[A-z]{10,}"}
          title={"Deve conter no minímo 10 caracteres!"}
          type={"text"}
        />
        <input
          required
          placeholder="Nacionalidade"
          value={country}
          onChange={inputCountry}
        />
        <button onSubmit={submitForm}>Enviar</button>
      </Form>
    </Home>
  );
}
export default ApplicationForm;
