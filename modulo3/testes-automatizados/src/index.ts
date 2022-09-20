import { User } from "./types";

export function compra(user: User, value: number): User | undefined {
  if (!user.nome || typeof user.nome !== "string") {
    throw new Error("Nome inválido");
  }

  if (!user.saldo || typeof user.saldo !== "number") {
    throw new Error("Saldo inválido");
  }

  if (user.saldo < value) {
    return undefined;
  }
  if (user.saldo >= value) {
    user.saldo = user.saldo - value;
    return user;
  }
}
const result = compra({ nome: "joely", saldo: 10 }, 15);
console.log(result)