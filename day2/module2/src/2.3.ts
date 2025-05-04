{
  // generics type

  type GenericArray<T> = Array<T>;

  //   const roleNumbers: number[] = [3, 2, 3];
  const roleNumbers: GenericArray<number> = [3, 2, 3];
  //   const mentorsName: string[] = ["Najmul", "Huda", "Mezba"];
  const mentorsName: GenericArray<string> = ["Najmul", "Huda", "Mezba"];
  //   const bloodArray: boolean[] = [true, false, true];
  const bloodArray: GenericArray<boolean> = [true, false, true];

  // exmple of array of object
  interface User  {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "limon",
      age: 20,
    },
    {
      name: "Khan",
      age: 23,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ["Ms", "ks"];
  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Persian", email: "a@gmail.com" },
  ];
}
