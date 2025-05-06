{
  // OOP --> Getter and Setter
  class BanckAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // setter use addDeposite
    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }
    //   addDeposite(amount: number) {
    //     this._balance = this._balance + amount;
    //   }
    // getter use getBalance
    get balance() {
      return this._balance;
    }
    //   getBalance() {
    //     return this._balance;
    //   }
  }
  class StudentAccount extends BanckAccount {
    test() {}
  }
  const goribManuserBankAccount = new BanckAccount(123, "Limon", 20);
  // const dipositBalance = goribManuserBankAccount.addDeposite(90);
  goribManuserBankAccount.deposite = 40;

  // const myBalance = goribManuserBankAccount.getBalance();
  const myBalance = goribManuserBankAccount.balance;
  console.log({ myBalance });

  //
}
