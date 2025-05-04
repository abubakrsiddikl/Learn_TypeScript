{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  //   declare a interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "limon",
    age: 200,
    role: "fs",
  };

  //   diclare array with inerface
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll2 = [12, 34, 34, 3];

  //   diclare function with inerface
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => {
    return num1 + num2;
  };
}
