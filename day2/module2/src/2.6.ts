{
  // Constraints

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 345,
    name: "sk",
    email: "sk@gmail.com",
    devType: "NLDV",
  });
  const student3 = addCourseToStudent({
    id: 12,
    name: "sk",
    email: "sk@gmail",
    emni: "dew",
  });
  const student2 = addCourseToStudent({
    id: 434,
    name: "khan",
    email: "khan@gmail.com",
    watch: "hashwatch",
  });

  //
}
