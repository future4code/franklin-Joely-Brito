import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";

const getDataToken = (token: string): AuthenticationData => {
    const payload =  jwt.verify(token, process.env.JWT_KEY as string) as any;
    const idResult = {
        id: payload.id
    }
    return idResult;
}
export default getDataToken