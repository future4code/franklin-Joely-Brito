import React, { useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  const logar = (event) => {
    event.preventDefault()

    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/login",
        body
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        goToAdminHome();
      })
      .catch((error) => {
        alert("Não foi possível logar");
      });
  };

  return (
    <Home>
      <h1>Login</h1>
      <Form>
        <input
          placeholder="Login"
          type={"email"}
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="Senha"
          type={"password"}
          value={password}
          onChange={onChangePassword}
        />
        <button onClick={logar}>Entrar</button>
      </Form>
    </Home>
  );
}
export default Login;
