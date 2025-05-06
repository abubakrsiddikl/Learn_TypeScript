{
  // OOP --> inheritance
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Nisika", 18, "Bhola");
  console.log(student1);
  //   student1.getSleep(8);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClassTime: number) {
      console.log(`${this.name} will take class ${numOfClassTime}`);
    }
  }

  const teacher1 = new Teacher("Nisika", 27, "BD", "Principle");
  console.log(teacher1);

  

  //
}
