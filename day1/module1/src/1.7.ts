{
  //   Today Lesson
  // sperade operator
  // rest operator
  // destrucring

  //   learn sperade operator
  const bros1: string[] = ["Tony", "Starck"];
  const bros2: string[] = ["Aragon", "Targerian"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tnmoy",
    could: "Nahid",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  //   learn rest operator
  const greetFriends = (...friends: string[]) => {
    console.log(friends);
  };
  greetFriends("jodu", "modu", "kodu", "abul", "kabul");
}
