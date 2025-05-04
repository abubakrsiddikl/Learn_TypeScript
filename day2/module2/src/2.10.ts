{
  // mapped type of TypeScript

  const arrayOfNumber: number[] = [1, 3, 2, 3, 4];
  const arrayOfString: string[] = arrayOfNumber.map((num) => num.toString());
  console.log(arrayOfString);

  //   example of mapped type
  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type Height = AreaNumber["height"]; //lookup type

  type AreaStrings<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaStrings<{ height: string; width: number }> = {
    height: "100",
    width: 34,
  };
}
