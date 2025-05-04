{
  // generic with function
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<number>(34);
  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 1324,
    name: "limon",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 10);
  const resTuple = createArrayWithTuple<string, { name: string }>("Bang", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "sk", type: "next", roll: 13 });

  //
}
