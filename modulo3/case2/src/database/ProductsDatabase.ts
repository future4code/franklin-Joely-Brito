import { products } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {
  public static TABLE_USERS = "amaro_products";

  public createProducts = async (products: products[]) => {
    await BaseDatabase.connection(ProductsDatabase.TABLE_USERS).insert(
      products
    );
  };

  public getProducts = async (id: Number) => {
    const result = await BaseDatabase.connection(
      ProductsDatabase.TABLE_USERS
    ).where("id", id);
    return result;
  };

  public getProductsByName = async (name: string) => {
    const result = await BaseDatabase.connection(
      ProductsDatabase.TABLE_USERS
    ).whereLike("name", `%${name}%`);
    return result;
  };
}
