import { Request, Response } from "express";
import { ProductsBusiness } from "../business/productsBusiness";

export class ProductsController {
  constructor(protected productsBusiness: ProductsBusiness) {}
  public registration = async (req: Request, res: Response) => {
    try {
      const products = req.body.products;
      const normalizeProducts = products.map((product: any) => {
        return {
          id: Number(product.id),
          name: product.name,
          tags: product.tags.toString(),
        };
      });

      const response = await this.productsBusiness.createProducts(
        normalizeProducts
      );
      res.status(201).send(response);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Error inesperado" });
    }
  };
}
