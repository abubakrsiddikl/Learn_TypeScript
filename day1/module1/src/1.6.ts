{
  //
  // Learnign Function
  // Normal Function
  // Arrow Function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(1, 2);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // Object --> function --> method

  const poorUser = {
    name: "Limon",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance : ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 23, 34];
  const newArray: number[] = arr.map((ele: number): number => ele * ele);
}
