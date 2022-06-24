import React from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }
  return (
    <Home>
      <h1>Login</h1>
      <Form>
        <input placeholder="Login" type={"email"} />
        <input placeholder="Senha" type={"password"} />
        <button onClick={goToAdminHome}>Entrar</button>
      </Form>
    </Home>
  );
}
export default Login;
