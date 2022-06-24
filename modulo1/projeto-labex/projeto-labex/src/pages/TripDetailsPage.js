import React from "react";
import styled from "styled-components"
import { Home } from "../pages/HomePage"
import { Card, ContainerCards } from "../pages/ListTripsPage"

function TripDetails () {
    return (
        <Home>
            <h1>Viagem</h1>
            <p>Descrição da viagem</p>
            <ContainerCards>
                <Card>
                    <p>Pessoa</p>
                    <p>Descrição</p>
                </Card>
            </ContainerCards>
        </Home>
    )
}
export default TripDetails;