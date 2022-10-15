import styled from "styled-components";
export const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: #00b8e2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    height: auto;
  }

  @media (max-width: 820px) {
    padding: 0px 16px;
  }
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

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    padding: 12px 0px;

    & > div {
      margin-bottom: 12px;
      margin-right: 0px;
    }
  }

  @media (max-width: 820px) {

  }
`;

export const Grafico = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div:first-child {
    max-width: 50%;
    border: solid 1px;
  }
  @media (max-width: 650px) {
    flex-direction: column;

    & div:first-child {
      margin-bottom: 32px;
      border: none;
      max-width: 100%;
    }
  }
`;
