import { userBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/database/UserDatabase";
import { ISignupInputDTO } from "../src/models/User";
import { IdGenerator } from "../src/services/IdGenerator";

describe("Testes no userBusiness", () => {
  test("Testa se a função signup retorna um erro quando os campos obrigatórios não são passados", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: "Madalena",
      participacion: "",
    };
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(
      business.signup(data)
    ).rejects.toThrowError(
        "Um ou mais parâmetros faltando"
    )
  });
});
