import { UserDatabase } from "../database/UserDatabase";
import { ISignupInputDTO, User } from "../models/User";
import { IdGenerator } from "../services/IdGenerator";

export class userBusiness {
  constructor(
    protected userDatabase: UserDatabase,
    protected idGenerator: IdGenerator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const first_name = input.first_name;
    const last_name = input.last_name;
    const participacion = input.participacion;

    if (!first_name || !last_name || !participacion) {
      throw new Error("Um ou mais parâmetros faltando");
    }

    if (
      typeof first_name !== "string" ||
      typeof last_name !== "string" ||
      typeof participacion !== "string"
    ) {
      throw new Error("Um ou mais parâmetros inválidos");
    }
    const regex = /^[0-9][0-9]?%/;
    if (regex.test(participacion) === false) {
      throw new Error("O campo so aceita valores acompanhados de porcentagem");
    }

    const id = this.idGenerator.generate();

    const user = new User(id, first_name, last_name, participacion);

    await this.userDatabase.createUser(user);

    const response = {
      message: "Usuário cadastrado com sucesso!",
    };
    return response;
  };

  public getUsers = async () => {
    const response = await this.userDatabase.getUsers();
    return response;
  };
}
