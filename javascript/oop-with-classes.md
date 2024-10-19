## Object-Oriented Programming with Classes

Object-Oriented Programming in JavaScript with Classes provides a clean and modern way to create and manage objects. OOP revolves around **Objects** and the idea of **creating reusable blueprints** (classes) for creating these objects.

### Key Concepts

- Class: Blueprint for creating objects. It defines properties (data) and methods (actions) that the object will have.

- Object: An instance of a class. You create new objects using the `new` keyword from the class.

- Constructor: A special method inside the Class used to initialize objects with specific values when they are created.

- Inheritance: Allows a class to inherit properties and methods from another class using `extends` and `super()` allowing code reuse.

- Encapsulation: Hides the internal workings of an object and provides controlled access to it, often using methods to interact with private properties.

- Polymorphism: Allows different objects to respond differently to the same method call.

### Use case

```js
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");

dog.speak(); // Buddy makes a sound.
cat.speak(); // Whiskers makes a sound.
```

Extending classes you can reuse code and expand capabilities:

```js
class Dog extends Animal {
  constructor(name, breed) { // These are the properties to create new instances.
    super(name, "Dog"); // calls the parent (Animal) constructor. Forces all Dog instances to have "Dog" as the Animal type.
    this.bread = bread;

    speak() {
      console.log(`${this.name} barks.`)
    }
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak() // Buddy barks.
```

### Encapsulation and Access Control

JavaScript doesn't have built-in keywords for private properties, but there are **naming conventions** like the usage of `#` as a prefix, to simulate private properties.

```js
class Car {
  #millage = 0; // Private property

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive(distance) {
    this.#millage += distance;
    console.log(`${this.make} ${this.model} drives for ${distance} miles.`);
  }

  getMillage() {
    return this.#millage; // Access to private property.
  }
}

this myCar = new Car("Tesla", "Model S");
myCar.drive(50) // Tesla Model S drives for 50 miles.
console.log(myCar.getMillage()) // 50
```

### Polymorphism

Polymorphism allows objects from different classes to respond to the same method call in different ways. This is usually achieved by overriding in inherited classes.

```js
class Bird extends Animal {
  constructor(name, type) {
    super(name, type);
  }

  speak() {
    console.log(`${this.name} chirps.`);
  }
}

const bird = new Bird("Tweety", "Bird");
const animal = new Animal("Generic", "Animal");

animal.speak(); // Generic makes a sound.
bird.speak(); // Tweety chirps. => Overridden method
```
