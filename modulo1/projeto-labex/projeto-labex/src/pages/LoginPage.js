import React, { useState } from "react";
import styled from "styled-components";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [form, setForm] = useState({email:"", password:""})

  const onChange = (event) => {
    setForm({...form, email: event.target.value});
    setForm({...form, password: event.target.value});
  }
  //const onChangeEmail = (event) => {
 //   setForm({...form, email: event.target.value});
 // };

  //const onChangePassword = (event) => {
 //   setForm({...form, password: event.target.value});
 // };

  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  const logar = (event) => {
    event.preventDefault()

    //const body = {
      //email: email,
      //password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/login",
        form
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
          name="email"
          value={Form.email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="Senha"
          name="password"
          value={Form.password}
          onChange={onChangePassword}
        />
        <button onClick={logar}>Entrar</button>
      </Form>
    </Home>
  );
export default Login;
