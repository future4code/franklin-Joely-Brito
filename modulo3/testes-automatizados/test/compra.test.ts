import { compra } from "../src/index";
import { User } from "../src/types";

test("Testa a função usando um saldo maior que o valor da compra", () => {
  const user: User = {
    nome: "Joely",
    saldo: 50,
  };
  const result = compra(user, 30);
  expect(result).toEqual({
    nome: "joely",
    saldo: 20,
  });
});

test("Testa a função com o saldo iagual ao valor de compra", () => {
  const user: User = {
    nome: "Xana",
    saldo: 10,
  };
  const result = compra(user, 10);
  expect(result).toEqual({
    nome: "Xana",
    saldo: 0,
  });
});

test("Testa a função com um saldo menor que o valor de compra", () => {
  const user: User = {
    nome: "Miguel",
    saldo: 25,
  };
  const result = compra(user, 35);
  expect(result).not.toBeDefined();
});
