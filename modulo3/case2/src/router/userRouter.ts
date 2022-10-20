import { Router } from "express";
import { ProductsBusiness } from "../business/productsBusiness";
import { ProductsController } from "../controller/productsController";
import { ProductsDatabase } from "../database/ProductsDatabase";

export const userRouter = Router();
const productsController = new ProductsController(
  new ProductsBusiness(new ProductsDatabase())
);

userRouter.post("/registration", productsController.registration);
userRouter.get("/id/:id", productsController.getProducts);
userRouter.get("/name/:name", productsController.getProductsByName);
userRouter.get("/tags/:tags", productsController.getProductsByTags);
