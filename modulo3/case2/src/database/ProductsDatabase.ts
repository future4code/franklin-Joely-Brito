import { products } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
  public static TABLE_USERS = "amaro_products";

  public createProducts = async (products: products[]) => {
    await BaseDatabase.connection(ProductsDatabase.TABLE_USERS).insert(products);
  };

  public getProducts = async () => {
    const result = await BaseDatabase.connection
      .select("*")
      .from(ProductsDatabase.TABLE_USERS);
    return result;
  };
}
