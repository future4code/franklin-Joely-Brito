import { Request, Response } from "express";
import { userBusiness } from "../business/UserBusiness";

export class UserController {
  constructor(protected userBusiness: userBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        participacion: req.body.participacion,
      };

      const response = await this.userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Error inesperado" });
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const response = await this.userBusiness.getUsers();

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
