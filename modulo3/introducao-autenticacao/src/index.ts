import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './data/createUser'
import { IdGenerator } from "./services/IdGeneration"
import { Request, Response } from "express"
import generateToken from "./services/generateToken"
import getUserByEmail from "./data/getUserByEmail"

const generator = new IdGenerator().generateId()
console.log(generator)

app.post('/user/signup', async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.email.includes("@")) {
            throw new Error("Email inválido");
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha fora do padrão exigido")
        } 
        const id = new IdGenerator().generateId()

        const email = req.body.email
        const password = req.body.password

        await createUser(id, email, password)

        const token = generateToken({id})
        res.status(201).send({
            message: "Usuário criado!", 
            token: token
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});
app.put('/user/edit/:id', editUser)

app.post('user/login', async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.email.includes("@")) {
            throw new Error("Credenciais inválidas!")
        }
        const userInfo = await getUserByEmail(req.body.email)
        if (userInfo.password !== req.body.password) {
            throw new Error("Credenciais inválidas!")
        }

        const token = generateToken({id: userInfo.id})
        res.status(200).send({
            token: token
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        })
        
    }
});