class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter method for species
  get species() {
    return this._species;
  }

  // Method to log the sound message
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(species) {
    // Call the parent constructor
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  constructor(species) {
    // Call the parent constructor
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;