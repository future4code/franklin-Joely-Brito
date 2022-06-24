import React from "react"
import styled from "styled-components"
import { Home } from "../pages/HomePage"

export const Form = styled.form`
display: flex;
flex-direction: column;
background-color: #F24E1E;
padding:20px;
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
    background-color: #F8A58B;
    cursor: pointer;
}
`
function ApplicationForm () {
    return (
        <Home>
            <h1>Formulário de interesse</h1>
            <Form>
                <input placeholder="Nome"/>
                <input placeholder="Idade"/>
                <input placeholder="Interesse pela viagem"/>
                <input placeholder="Profissão"/>
                <input placeholder="Nacionalidade"/>
                <input placeholder="Destino"/>
                <button>Enviar</button>
            </Form>
        </Home>
    )
}
export default ApplicationForm;