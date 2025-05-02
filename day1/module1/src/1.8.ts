{
  //  destrucring

  const user = {
    id: 13,
    name: {
      fastName: "limon",
      middleName: "Sab",
      lastName: "bepari",
    },
    contact: "4395349",
    adress: "Bhola",
  };

  const {
    contact,
    name: { middleName: midName },
  } = user;

  // Array destructring
  const myFriends: string[] = ["Nisika", "Rahan", "Hibat", "monika", "Suleman"];
  const [, , bestFriend, ...rest] = myFriends;
}
