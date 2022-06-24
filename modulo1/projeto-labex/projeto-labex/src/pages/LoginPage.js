import React from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";

function Login() {
  return (
    <Home>
      <h1>Login</h1>
      <Form>
        <input placeholder="Login" type={"email"} />
        <input placeholder="Senha" type={"password"} />
        <button>Entrar</button>
      </Form>
    </Home>
  );
}
export default Login;
