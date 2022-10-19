import { BaseDatabase } from "../database/BaseDatabase";
import { ProductsDatabase } from "../database/ProductsDatabase";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");
      console.log("Migrations completed.");
    } catch (error: any) {
      console.log("Error in migrations...");
      console.log(error.message);
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };
  createTables = async () => {
    await BaseDatabase.connection.raw(`
    DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_USERS};
    CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_USERS}(
        id INT(4) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL
    );
    `);
  };
}
const migrations = new Migrations();
migrations.execute();
