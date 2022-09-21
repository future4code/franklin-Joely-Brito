import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "5min";
const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token;
}

export default generateToken