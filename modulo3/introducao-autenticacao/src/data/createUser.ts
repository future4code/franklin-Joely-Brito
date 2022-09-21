import connection from "../conecction";

const userTableName = "user";

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

export default createUser;
