import React from "react";
import { Home } from "../pages/HomePage";
import { Form } from "../pages/ApplicationFormPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForm";

function Login() {
  const { form, onChange } = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  const logar = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/franklin/login",
        form
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
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
          required
          type={"email"}
          placeholder="Login"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <input
          required
          type={"password"}
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
        />
        <button onClick={logar}>Entrar</button>
      </Form>
    </Home>
  );
}
export default Login;
