import { ProductsDatabase } from "../database/ProductsDatabase";
import { products } from "../model/Products";

export class ProductsBusiness {
  constructor(protected productsDatabase: ProductsDatabase) {}
  public createProducts = async (normalizeProducts: products[]) => {
    normalizeProducts.forEach((product) => {
        console.log(product)
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
}
