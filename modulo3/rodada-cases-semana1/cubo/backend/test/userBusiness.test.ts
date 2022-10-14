import { userBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/database/UserDatabase";
import { ISignupInputDTO } from "../src/models/User";
import { IdGenerator } from "../src/services/IdGenerator";

describe("Testes no userBusiness", () => {
  test("Testa se o método signup retorna um erro quando o campo participacion não for passado", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: "Madalena",
      participacion: "",
    };
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros faltando"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo first_name não for passado", async () => {
    const data: ISignupInputDTO = {
      first_name: "",
      last_name: "Madalena",
      participacion: "5%",
    };
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros faltando"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo last_name não for passado", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: "",
      participacion: "5%",
    };
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros faltando"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo first_name for passado um valor diferente de uma string", async () => {
    const data: ISignupInputDTO = {
      first_name: 5525,
      last_name: "Madalena",
      participacion: "5%",
    } as unknown as ISignupInputDTO;
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros inválidos"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo last_name for passado um valor diferente de uma string", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: 5525,
      participacion: "5%",
    } as unknown as ISignupInputDTO;
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros inválidos"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo participation for diferente de uma string", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: "Madalena",
      participacion: 5,
    } as unknown as ISignupInputDTO;
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "Um ou mais parâmetros inválidos"
    );
  });

  test("Testa se o método signup retorna um erro quando o campo participation não for passado com o sinal de porcentagem acompanhando o número", async () => {
    const data: ISignupInputDTO = {
      first_name: "Maria",
      last_name: "Madalena",
      participacion: "5",
    };
    const business = new userBusiness(new UserDatabase(), new IdGenerator());
    await expect(business.signup(data)).rejects.toThrowError(
      "O campo so aceita valores acompanhados de porcentagem"
    );
  });
});
