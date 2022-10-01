import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "User_Participations";

  public getUsers = async () => {
    const result = await BaseDatabase.connection
      .select("*")
      .from(UserDatabase.TABLE_USERS);
    return result;
  };
}
