## Prototypal Inheritance

In JavaScript, objects can inherit properties and methods from other objects. Every object in JavaScript has a hidden, internal property known as `[[Prototype]]` (often accessible via `__proto__`) which points to another object (the `prototype` at its constructor/prototype). This allows objects to inherit features (properties and methods) from their prototype.

### Key concept: The Prototype Chain

When you try to access a property or method on an object, Javascript:

1. First looks for that property on the object itself.
2. If a property or method is not found in the object, JavaScript looks up the `prototype chain` to find it.
3. All objects by default inherit from `Object.prototype`, which is the base object in JavaScript.

```js
const animal = {
  eats: true,
  walk() {
    console.log("The animal is walking");
  },
};

const dog = {
  barks: true,
};

dog.__proto__ = animal;
console.log(dog.eats); // true
dog.walk(); // Animal is walking
console.log(dog.barks); // true

animal.isPrototypeOf(dog); // true
```

A more common way to set up prototypal inheritance is using a **constructor functions** and the `prototype` property through a Constructor Function.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(`${this.name} is walking`);
};

const dog = new Animal("Buddy");
console.log(dog.name); // Buddy
dog.walk(); // "Buddy is walking"
```

The visualization of how prototypal inheritance works through the prototype chain using the prev example would be:

```
let dog = new Animal("Buddy");

// Prototype chain:
dog -> Animal.prototype -> Object.prototype -> null
```

### Real-World use of Prototypal inheritance

- **Inheritance of Methods**: You can define shared methods on prototypes to avoid duplicating code across multiple objects.

- **Memory Efficiency**: Rather than having methods duplicated in every object, they are shared through the prototype, making the code more efficient.
