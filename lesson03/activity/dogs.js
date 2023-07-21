// Create the Dog class constructor
class Dog {
  // expected parameters
  constructor(name, age, breed, color) {
    // set equal to instance
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    // energy and bark levels have default values
    this.energyLevel = 0;
    this.barkLevel = 10;
  }

  // pat method
  pat() {
    // increment energyLevel
    this.energyLevel++;
    // decrement barkLevel
    this.barkLevel--;
    // console.log resulting info
    console.log(`Dog ${this.name} is ${this.age} years old. Current energy level is ${this.energyLevel} and bark level is ${this.barkLevel}.`);
  }
}

// Create Marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// Pat him 5 times
// wouldn't a loop be better? DRY
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
