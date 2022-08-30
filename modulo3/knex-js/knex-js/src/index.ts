import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `);

  return result[0][0];
};

const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE gender = '${gender}'
    `);
  return result[0];
};

const updateActorSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });
  return result[0].average;
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: "erro ao buscar dados",
    });
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

app.get("/actor?gender=", async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender;
    const count = await getActorByGender(gender);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: "Error ao buscar os dados",
    });
  }
});

app.put("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const salary = req.body.salary
    await updateActorSalary(id, salary)
    res.status(200).send({
      message: "Atualização concluída"
    })
  } catch (err){
    res.status(400).send({
      message: "Error ao realizar a atualização"
    })
  }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteActor(id)
  } catch {
    res.status(400).send({
      message: "Error ao deletar ator!"
    })
  }
})
