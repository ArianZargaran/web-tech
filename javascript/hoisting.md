## Hoisting

With our Global Execution Context, we have a few things that happen:

- The Global Object is defined
- The `this` keyword is set to the Global Object

During the creation phase, the act of **Hoisting** is performed.
So, the engine will look for all the variables and functions that are defined in the Global Object and move them to the top of the Global Object.

The hoisting process is performed to make sure we have enough space on our Memory Heap to run the program.

Variables are hoisted to the top of the Global Object and their initial value before their declaration is `undefined `.

```javascript
/**
 * Hoisted variable at the top
 * var a = undefined;
 */

console.log(a); // undefined
var a = 1;
```

On the contrary, functions are fully hoisted to the top of the Global Object.

```javascript
/**
 * Hoisted function at the top
 * function a() {
 *   return 1;
 * }
 */

console.log(a()); // 1
function a() {
  return 1;
}
```

During the execution phase of a program, we run our code.

### Hoisting by execution context

Final and hardest example to master the hoisting process would be:

```javascript
var favoriteFood = "grapes";

var foodThoughts = function () {
  console.log("I like " + favoriteFood);

  var favoriteFood = "bananas";

  console.log("I really like " + favoriteFood);
};

foodThoughts(); // I like undefined // I really like bananas
```

Anytime we run a function, a new execution context gets created and we have to go through the Creation phase, and the Execution phase.
