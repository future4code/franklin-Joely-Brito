import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users";

  public toUserDBModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    return userDB;
  };

  public createUser = async (user: User) => {
    const userDB = this.toUserDBModel(user);

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };

  public getByEmail = async (email: string) => {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS)
      .where("email", email);
    return result[0];
  };

  public getAll = async () => {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS);
    return result;
  };

  public deleteUser = async (id: string) => {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS)
      .where("id", id)
      .del();
  };
}
