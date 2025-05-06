{
  // type gurd Use typeof & in

  type Alphaneumaric = string | number;

  const add = (
    param1: string | number,
    param2: string | number
  ): string | number => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", 2);
  // console.log(result1);

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} my role ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "limon",
  };
  const adminUser: AdminUser = {
    name: "khan",
    role: "admin",
  };
  getUser(normalUser);
  getUser(adminUser)

  //
}
