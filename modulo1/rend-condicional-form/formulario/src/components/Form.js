import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 18px;

  > input {
      width: 170px;
      height: 18px;
      border:none;
      border: solid 1px black;
      border-radius: 5px;
      margin-bottom: 8px;
  }

  > select {
      width: 150px;
      height: 18px;
      border-radius: 5px;
      border: solid 1px black;

  }
`;

export default FormContainer;
