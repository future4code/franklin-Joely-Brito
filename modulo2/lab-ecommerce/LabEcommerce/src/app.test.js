import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Home Page tests", () => {
  test("Indicador de quantidade de produtos começa em 3", () => {
    render(<App />);
    const produtos = screen.getAllByText(/Produto /);
    expect(produtos).toHaveLength(3);
  });

  test("Sem valor mínimo, há quatro produtos, e isso é indicado corretamente", () => {
    render(<App />);
    const filtroMinimo = screen.getByLabelText("Filtro Mínimo:");
    userEvent.clear(filtroMinimo);
    const produtos = screen.getAllByText(/Produto /);
    expect(produtos).toHaveLength(4);
  });

  test("Filtro de busca por nome funciona, e encontra produto com 'legal' no nome", () => {
    render(<App />);
    const filtroNome = screen.getByLabelText("Busca por nome:");
    userEvent.type(filtroNome, "legal");
    const produtos = screen.getAllByText(/Produto /);
    expect(produtos).toHaveLength(1);
  });

  test("Ordenação decrescente garante produto de preço maior na frente.", () => {
    render(<App />);
    const ordenacaoSelect = screen.getByLabelText(/Ordenação:/);
    userEvent.selectOptions(ordenacaoSelect, screen.getByText(/Decrescente/));
    const [primeiro, segundo] = screen.getAllByText(/R\$/);
    const precoPrimeiro = Number(
      primeiro.textContent.split(" ")[1].split(",")[0]
    );
    const precoSegundo = Number(
      segundo.textContent.split(" ")[1].split(",")[0]
    );
    expect(precoPrimeiro).toBeGreaterThan(precoSegundo);
  });
});
