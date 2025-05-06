{
  // Encapstulation
  class BanckAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }
  class StudentAccount extends BanckAccount {
    test() {}
  }
  const goribManuserBankAccount = new BanckAccount(123, "Limon", 20);
  const dipositBalance = goribManuserBankAccount.addDeposite(90);

  const myBalance = goribManuserBankAccount.getBalance();
  console.log({ myBalance });
  

  //
}
