export class User {
  constructor(
    private id: string,
    private first_name: string,
    private last_name: string,
    private participacion: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getFirts_name = () => {
    return this.first_name;
  };

  public getLast_name = () => {
    return this.last_name;
  };

  public getParticipacion = () => {
    return this.participacion;
  };
}
export interface ISignupInputDTO {
  first_name: string;
  last_name: string;
  participacion: string;
  }