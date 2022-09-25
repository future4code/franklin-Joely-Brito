import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { hashManager } from "../services/HasManager";
import { idGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new idGenerator(),
    new hashManager(),
    new Authenticator()
  )
);

userRouter.post("/signup", userController.signup);
