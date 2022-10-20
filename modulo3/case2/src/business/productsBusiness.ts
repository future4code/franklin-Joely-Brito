import { ProductsDatabase } from "../database/ProductsDatabase";
import { products } from "../model/Products";

export class ProductsBusiness {
  constructor(protected productsDatabase: ProductsDatabase) {}
  public createProducts = async (normalizeProducts: products[]) => {
    normalizeProducts.forEach((product) => {
      if (!product.id || !product.name || !product.tags) {
        throw new Error("Um ou mais parâmetros faltando!");
      }
    });
    await this.productsDatabase.createProducts(normalizeProducts);
    const response = {
      message: "Produto cadastrado com sucesso!",
    };
    return response;
  };

  public getProducts = async (id: string) => {
    const response = await this.productsDatabase.getProducts(Number(id));
    return response;
  };

  public getProductsByName = async (name: string) => {
    const response = await this.productsDatabase.getProductsByName(name);
    return response;
  };
}
