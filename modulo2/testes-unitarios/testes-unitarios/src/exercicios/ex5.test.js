import { letraMaiscula } from "./ex5";
describe("Transforma a primeira letra de cada palavra em maiuscula", () => {
  it("retorna 'Ola' para 'ola'", () => {
    const fraseLetraMaiuscula = letraMaiscula("ola");
    expect(fraseLetraMaiuscula).toEqual("Ola");
  });

  it("retorna 'Ola, Mundo' para 'ola, mundo'", () => {
    const fraseLetraMaiuscula = letraMaiscula("ola, mundo");
    expect(fraseLetraMaiuscula).toEqual("Ola, Mundo");
  });

  it("retorna 'Eu Sou Joely, Aluna Da Labenu' para 'eu sou joely, aluna da labenu'", () => {
    const fraseLetraMaiuscula = letraMaiscula(
      "eu sou joely, aluna da labenu"
    );
    expect(fraseLetraMaiuscula).toEqual("Eu Sou Joely, Aluna Da Labenu");
  });
});
