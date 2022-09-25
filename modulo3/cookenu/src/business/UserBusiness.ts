import { UserDatabase } from "../database/UserDatabase";
import { ISignupInputDTO, ISignupOutputDTO, User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { hashManager } from "../services/HasManager";
import { idGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    protected userDatabase: UserDatabase,
    protected idGenerator: idGenerator,
    protected hashManager: hashManager,
    protected authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || !email || !password) {
      throw new Error("Um ou mais parâmetros faltando");
    }

    if (typeof name !== "string") {
      throw new Error("Parâmetro name incorreto!");
    }

    if (typeof email !== "string") {
      throw new Error("Parâmetro email incorreto!");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Parâmetro password inválido");
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (userDB) {
      throw new Error("E-mail já cadastrado");
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword);
    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
    };

    const token = this.authenticator.generateToken(payload);

    const response: ISignupOutputDTO = {
      message: "Cadastro realizado com sucesso",
      token,
    };

    return response;
  };
}
