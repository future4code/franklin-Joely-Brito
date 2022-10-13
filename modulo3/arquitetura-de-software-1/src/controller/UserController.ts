import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: any = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const response = await userBusiness.login(input);

      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const headers = req.headers.token;
      const userBusiness = new UserBusiness();
      const response = await userBusiness.getAll(headers as string);

      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(401).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const headers = req.headers.token;
      const id = req.params.id;
      const userBusiness = new UserBusiness();
      const response = await userBusiness.deleteUser(id, headers as string);

      res.status(200).send(response);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
