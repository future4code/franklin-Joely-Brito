import UserDatabase from "../database/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(id, name, email, hashPassword);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };

    return response;
  };

  public login = async (input: any) => {
    const email = input.email;
    const password = input.password;

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    if (!password) {
      throw new Error("Parâmetro senha inválido");
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getByEmail(email);

    const hashManager = new HashManager();
    const comparePassword = await hashManager.compare(password, user.password);

    if (!comparePassword) {
      throw new Error("Erro ao fazer login!");
    }
    const payload: ITokenPayload = {
      id: user.id,
      role: user.role,
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };

    return response;
  };

  public getAll = async (token: string) => {
    if (!token) {
      throw new Error("Token não informado!");
    }
    const userDatabase = new UserDatabase();
    const users = await userDatabase.getAll();

    return users;
  };

  public deleteUser = async (id: string, token: string) => {
    if (!id) {
      throw new Error("Id não informado");
    }
    if (!token) {
      throw new Error("Token não informado!");
    }

    const authenticator = new Authenticator();
    const tokenPayload = authenticator.getTokenPayload(token);
    if (tokenPayload.role !== "ADMIN") {
      throw new Error("Requisição negada!");
    }

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

    const status = {
      message: "Usuário deletado",
    };

    return status;
  };
}
