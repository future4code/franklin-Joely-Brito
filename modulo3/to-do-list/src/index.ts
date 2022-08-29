import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  await connection("User").insert({
    name: name,
    nickname: nickname,
    email: email,
  });
};

const getUser = async (id: string): Promise<any> => {
  const user = await connection.raw(`
    SELECT * FROM User WHERE ID = '${id}'
    `);
  return user[0][0];
};

const updateUser = async (id: string, updateData: object): Promise<any> => {
  await connection("User").where({ id: id }).update(updateData);
};

const createTask = async (
  title: string,
  description: string,
  limit_date: number,
  creator_user_id: number
): Promise<any> => {
  await connection("Task").insert({
    title: title,
    description: description,
    limit_date: limit_date,
    creator_user_id: creator_user_id,
  });
};

const getTaskById = async (id: string): Promise<any> => {
  const task = await connection.raw(`
    SELECT * FROM Task WHERE task_id = '${id}'
    `);
  return task[0][0];
};

app.post("/user", async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email;
    await createUser(name, nickname, email);
    res.status(201).send({
      message: "Usuário Criado!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao criar usuário!",
    });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.status(200).send({
      id: user.id,
      nickname: user.nickname,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error ao encontrar usuário!",
    });
  }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    await updateUser(id, body);
    res.status(200).send({
      message: "Usuário atualizado!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao atualizar usuário!",
    });
  }
});

app.post("/task", async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const limit_date = req.body.limit_date;
    const creator_user_id = req.body.creator_user_id;
    await createTask(title, description, limit_date, creator_user_id);
    res.status(201).send({
      message: "Task criada com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao criar task!",
    });
  }
});

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await getTaskById(id);
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send({
      message: "Erro ao solicitar task!",
    });
  }
});
