{
  // utility type in TypeScript

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type AgeName = Pick<Person, "age" | "name">;

  //   Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonOptional = Partial<Person>;

  //   Readonly

  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "limon",
    age: 21,
    email: "kahn",
    contactNo: "017",
  };

  //   Record
  // type MyObj = {
  //     a: string;
  //     b: string
  // }

  type MyObj = Record<string, string>;
  const emptyObj: Record<string, unknown> = {};
  const myObj: MyObj = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
  };

  //
}
