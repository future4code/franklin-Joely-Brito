import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE gender = '${gender}'
    `)
    return result[0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log("aqui")
    console.log(await getActorById(id))

    res.end()
  } catch (error) {
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

app.get("/users/name/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        console.log(await getActorByName(name))
        res.end()
    } catch (eror) {
        res.status(500).send("unexpected error")
    }
})

app.get("/users/gender/:gender", async (req: Request, res:Response) => {
    try {
        const gender = req.params.gender
        console.log(gender)
        console.log(await getActorByGender(gender))
        res.end()
    } catch (error) {
        res.status(500).send("unexpected error")
    }
})