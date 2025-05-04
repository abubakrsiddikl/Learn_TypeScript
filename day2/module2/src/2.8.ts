{
  // promise
  // simulate

  const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  };
  getTodo();

  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //   calling createPromise
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log(data);
  };
  showData();

  //
}
