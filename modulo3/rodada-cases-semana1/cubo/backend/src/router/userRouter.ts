import { Router } from 'express'
import { userBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'


export const userRouter = Router()

const userController = new UserController(
    new userBusiness(
        new UserDatabase(),
        new IdGenerator(),
    )
)

userRouter.post("/signup", userController.signup)
userRouter.get("/all", userController.getUsers)