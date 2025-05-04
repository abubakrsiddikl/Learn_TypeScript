{
  // type assetion

  let anything: any;
  anything = "next level developer";
  anything = 22;
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The convertedValue is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGm(1000) as number;
  type CoustomeError = string;
  try {
  } catch (error) {
    console.log();
  }
}
