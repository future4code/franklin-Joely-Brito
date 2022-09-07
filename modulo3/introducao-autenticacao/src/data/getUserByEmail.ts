import connection from "../conecction";
const userTableName = "user";

const getUserByEmail = async(email: string) => {
    const userInfo = await connection.select("*").from(userTableName).where({email: email})
    return userInfo[0]
}
export default getUserByEmail