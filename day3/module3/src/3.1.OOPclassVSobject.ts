{
  // oop class
  class Animal {
    // parameter
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    // diclare a method of class
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  //   create instance/object in animal class
  const dog = new Animal("dog", "dog species", "Gew Gew");
  const cat = new Animal("cat", "cat species", "mew mew mew");

  cat.makeSound();
}
