{
  // Abstraction ---> 1.interface 2.abstract

  //   idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   real implementaion
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the car engine`);
    }
    move(): void {
      console.log(`I am the moving the car`);
    }
    test() {
      console.log("I am just testing");
    }
  }
  const toyataCar = new Car();
  toyataCar.startEngine();

  abstract class Car2 implements Vehicle1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }
  class ToyoTaCar extends Car2 {
    startEngine(): void {
        console.log("I am starting car engine")
    }
    stopEngine(): void {
        console.log("I am stop")
    }
    move(): void {
        console.log("I am move")
    }
  }

  const hondaCar = new Car2();
  hondaCar.move();

  //
}
