import { Request, Response } from "express";
import { ProductsBusiness } from "../business/productsBusiness";

export class ProductsController {
  constructor(protected productsBusiness: ProductsBusiness) {}
  public registration = async (req: Request, res: Response) => {
    try {
      let normalizeProducts;
      if (req.get("Content-Type") === "application/xml") {
        const products = req.body.products.element;
        normalizeProducts = products.map((product: any) => {
          const tags = product.tags[0].element.toString().toLowerCase();
          return {
            id: Number(product.id.toString()),
            name: product.name.toString().toLowerCase(),
            tags,
          };
        });
      } else {
        const productsJson = req.body.products;
        normalizeProducts = productsJson.map((product: any) => {
          return {
            id: Number(product.id),
            name: product.name.toLowerCase(),
            tags: product.tags.toString().toLowerCase(),
          };
        });
      }
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

  public getProducts = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await this.productsBusiness.getProducts(id);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public getProductsByName = async (req: Request, res: Response) => {
    try {
      const name = req.params.name.toLowerCase();
      const response = await this.productsBusiness.getProductsByName(name);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  public getProductsByTags = async (req: Request, res: Response) => {
    try {
      const tags = req.params.tags.toLowerCase();
      const response = await this.productsBusiness.getProductsByTags(tags);

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
