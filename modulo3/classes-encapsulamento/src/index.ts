class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  // private transactions: Transaction[] = [];
  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }
}
class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription(): string {
    return this.description;
  }

  public getValue(): number {
    return this.value;
  }

  public getDate(): string {
    return this.date;
  }
}
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
const cadastro = new UserAccount("0000000", "Joely", 18);
const portabilidade = new Transaction("Mudança", 200, "20/08/2022");
