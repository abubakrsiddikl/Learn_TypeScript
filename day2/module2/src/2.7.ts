{
  // generic type with Constraint using key of keyword

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "car";

  const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "limon",
    age: 22,
    address: "ctg",
  };
  const car = {
    model: "lemogen",
    year: "2025"
  }
  const result = getProperty(car, "model");

  //
}
