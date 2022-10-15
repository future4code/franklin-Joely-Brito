import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "User_Participations";

  public createUser = async (user: User) => {
    const userDB = {
      id: user.getId(),
      first_name: user.getFirts_name(),
      last_name: user.getLast_name(),
      participacion: user.getParticipacion(),
    };

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };
  public getUsers = async () => {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS);
    return result;
  };
}
