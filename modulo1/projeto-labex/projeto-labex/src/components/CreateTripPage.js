import React from "react";
import styled from "styled-components";
import { Home } from "./HomePage";
import { Form } from "./ApplicationFormPage";

function CreateTrip() {
  return (
    <Home>
      <h1>Criar nova viagem</h1>
      <Form>
        <input placeholder="Nome" />
        <input placeholder="Planeta" />
        <input placeholder="Data" type={"date"}/>
        <input placeholder="Descrição" />
        <input placeholder="Duração em dias" type={"number"}/>
        <button>Criar Viagem</button>
      </Form>
    </Home>
  );
}
export default CreateTrip;
