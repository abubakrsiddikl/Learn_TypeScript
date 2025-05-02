{
  // nullable type

  const serching = (value: string | null) => {
    if (value) {
      console.log("serching");
    } else {
      console.log("There is no searching");
    }
  };
  serching(null);

  //   unknown type
  const getSpeedInMeeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    }
    if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeeterPerSecond(null);

  // never type
  // const thorError = (msg: string): never => {
  //   throw Error(msg);
  // };
  // thorError("Hangki punki");
}
