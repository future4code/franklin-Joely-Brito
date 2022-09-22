import { validaPersonagem }from "../src";

describe("Valida informações do personagem", () => {
  test("Valida se o return vem false se o personagem não tiver nome", () => {
    const result = validaPersonagem("", 1500, 200, 400);
    expect(result).toBe(false);
  });

  test("Valida se o return vem false se o personagem tiver vida igual a zero", () => {
    const result = validaPersonagem("avatar", 0, 200, 400);
    expect(result).toBe(false);
  });

  test("Valida se o return vem false se o personagem tiver força igual a zero", () => {
    const result = validaPersonagem("Avatar", 1500, 200, 0);
    expect(result).toBe(false);
  });

  test("Valida se o return vem false se o personagem tiver defesa igual a zero", () => {
    const result = validaPersonagem("Avatar", 1500, 0, 400);
    expect(result).toBe(false);
  });

  test("Valida se o return vem false se o personagem tiver força negativa", () => {
    const result = validaPersonagem("Avatar", 1500, 200, -400);
    expect(result).toBe(false);
  });

  test("Valida todas as informações do personagem e retorna true se tudo estiver coreto", () => {
    const result = validaPersonagem("Avatar", 1500, 200, 400);
    expect(result).toBe(true);
  });
});
