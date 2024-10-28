## Functional Programming

Functional Programming (FP) in JavaScript is a programming paradigm that focuses on writing code using **pure functions**, avoiding shared state, and using **higher-order functions**. It emphasizes immutability, avoiding side effects, and treating functions as **first-class citizens**, meaning functions can be passed around like any other variable.

### Key Principles of Functional Programming

1. **Pure Functions**: Functions that always return the same output for the same input and don't modify anything outside their scope (no side effects).

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 Always the same output for the same input
```

2. **Immutability**: Data doesn't change. Instead of modifying existing data, you create new data.

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(numbers); // [1, 2, 3] (Original array is unchanged)
console.log(newNumbers); // [1, 2, 3, 4] (New array with added value)
```

3. **First-Class Functions**: Functions are treated as values and can be assigned to variables, passed as arguments, or returned from other functions.

4. **Higher-Order Functions**: Functions can take other functions as arguments or return them.

```js
const addTwo = (num) => num + 2;
const addThree = (callback, num) => callback(num) + 1;

const threeMore = addThree(addTwo, 1); // 4
```

5. **Declarative Style**: Instead of writing out how to do something (step-by-step imperative style), you describe what you want to happen (declarative style).

### Advantages of Functional Programming

1. Easier to reason about: Pure functions are immutability make code more predictable and easier to understand.

2. Modularity and Reusability: Since functions and first-class citizens and can be passed around, it's easier to build modular and reusable code.

3. Avoids side effects: Pure functions don't modify any outside data, making it easier to avoid bugs related to shared state.

4. Better for parallel computing: Because functional code avoids changing state and data is immutable, it's easier to parallelize.
