{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    adress: string;
  };

  const student1: Student = {
    name: "Elias",
    age: 23,
    gender: "Male",
    contactNo: "3948534243",
    adress: "Dhaka",
  };
  const student2: Student = {
    name: "bellal",
    age: 23,
    gender: "Male",
    adress: "Bhola",
  };
  const student3: Student = {
    name: "bellal",
    age: 23,
    gender: "Male",
    adress: "Bhola",
  };
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "user";
  const isAdmin: IsAdmin = true;

  //   function Alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
