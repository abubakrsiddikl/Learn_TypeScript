{
  // conditional type
  type a1 = number;
  type a2 = undefined;
  type x = a1 extends null ? true : false;

  type Shike = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };
  type CheckVehicle<T> = T extends keyof Shike ? true : false;
  type HasPlane = CheckVehicle<"plane">;
}
