import connection from "../conecction";
const userTableName = "user";

const getUserById = async (id: string) => {
    const userInfo = await connection.select("*").from(userTableName).where({id: id})
    return userInfo[0]
}
export default getUserById