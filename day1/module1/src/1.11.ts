{
  // ternarry operator & optional chaning & nullish coalescing operator
  const age = 15;
  if (age >= 18) console.log("adult");
  else {
    // console.log("not adult ");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log(isAdult);

  //   nallish coalescing operator
  // null and undefind --> dicision making
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  //   console.log({ result1 }, { result2 });

  //  optional chaing
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user: User = {
    name: "Limon",
    address: {
      city: "Bhola",
      road: "Block",
      presentAddress: "Bhola",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
}
