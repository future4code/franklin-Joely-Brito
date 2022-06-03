import styled from "styled-components";

const Entradas = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 550px;

  > input {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    width: 170px;
    height: 20px;
    font-size: 12px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    padding-left: 12px;
    margin-right: 5px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    width: 60px;
    height: 22px;
    font-size: 12px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    font-weight: bold;
  }
`
export default Entradas;