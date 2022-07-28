import { ordenaNumeros } from "./ex4";

describe("Ordena itens de uma array", () => {
  it("retorna true para [20, -1, -4, 0, 6]", () => {
    const arrayOrdenado = ordenaNumeros([20, -1, -4, 0, 6]);
    expect(arrayOrdenado).toEqual([-4, -1, 0, 6, 20]);
  });

  it("retorna true para [4, 7, 1, 3]", () => {
    const arrayOrdenado = ordenaNumeros([4, 7, 1, 3]);
    expect(arrayOrdenado).toEqual([1, 3, 4, 7]);
  });

  it("retorna true para [3, 2, 1]", () => {
    const arrayOrdenado = ordenaNumeros([3, 2, 1]);
    expect(arrayOrdenado).toEqual([1, 2, 3]);
  });
});
