## Javascript Types

Javascript types can be split in two groups: `primitives` and `non-primitives`. In a nutshell:

```js
// Primitives
1. number // for instance: 5
2. string // for instance: "Hello world!"
3. boolean // for instance: true
4. undefined
5. null
6. Symbol("just me")
7. BigInt

// Non primitives
8. object // => for instance: {}
8.2. function // => (internally also an object)
```

- Primitive: are immutable and are stored in memory as they are. They are generally basic, simple values.
- Non-primitive: More complex data structures.

### Primitive Types

1. Number. Includes numeric values, whole or decimals.
2. String. Sequence of characters, used to represent text.
3. Boolean. It can only be two values: `true` or `false`.
4. Undefined. When the variable is not given a value.
5. Null. Explicit value that represent "nothing" or "no value" (most probably on purpose).
6. Symbol. Unique and immutable value that can be used to create unique identifiers.
7. BigInt. Used for very large numbers.

### Non-primitive Types

1. Object. And we could stop counting non-primitive types here. In Javascript all complex types are internally objects from which they derive other types, like arrays, functions, etc. Reassigning an object implies the need of a deep clone, due to the fact that the values assignments are passed/stored by reference, while primitive types are stored by value. Objects are mutable, meaning, you could change their contents.
2. Array. Special kind of object that stores values in a special ordered list.
3. Function. Block of code that you can declare and later call to perform a task.
4. Built-in Objects. JS has some useful specialized resources to simplify developers job, for instance: `Date`, `RegEx`, or `Error`, just to mention a few.
