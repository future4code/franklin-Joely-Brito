import { Personagem } from "./types";

export function validaPersonagem(
  nome: string,
  vida: number,
  defesa: number,
  forca: number
) {
  if (!nome) {
    return false;
  }
  if (vida <= 0 || defesa <= 0 || forca <= 0) {
    return false;
  }
  return true;
}

export function realizaAtaque(atacante: Personagem, defensor: Personagem) {
  if (
    validaPersonagem(
      atacante.nome,
      atacante.vida,
      atacante.defesa,
      atacante.forca
    ) === false
  ) {
    return "Personagem Inválido!";
  }
  if (
    validaPersonagem(
      defensor.nome,
      defensor.vida,
      defensor.defesa,
      defensor.forca
    ) === false
  ) {
    return "Personagem Inválido!";
  }

  if (defensor.defesa < atacante.forca) {
    const danos = atacante.forca - defensor.defesa;
    const vidaAtual = defensor.vida - danos;
    defensor.vida = vidaAtual;
  }
}
