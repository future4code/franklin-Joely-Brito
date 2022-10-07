import styled from "styled-components";
export const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: #00b8e2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;

  & > div {
    margin-right: 25px;
    border-radius: 3px;
    border: none;
    background-color: white;
  }

  & > Button {
    background-color: #00b8e2;
    border: 1.5px solid white;
    color: white;
    width: 100px;
  }
`;

export const Grafico = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
