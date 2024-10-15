## Closures

A closure is a JS mechanism that's created automatically when a function remembers and **keeps access** to variables from its **outer scope** even after the outer function has finished running. In other words, a closure gives you the ability to remember and work with the variables of a parent function even after the parent function has completed execution.

Internally, JS keeps the reference to the variables on the upper/outer scope, knowing that they might need it later on internally. All non-used variables are garbage-collected.

### How it works.

- Important Concepts (Context):

1. In Javascript, functions can be nested inside other functions.
2. When the inner function is returned from the outer function, it keeps access to the variables in the outer function, even though the outer function has finished running.
3. This "remembering" of the outer variables is what we call a closure.

### Key Idea:

Closures allow functions to "remember" their surrounding state (lexical environment) even after the parent function has executed.

```js
function outerFunction() {
  let outerVariable = "I am from outerFunction!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
outerFunction(); // I am from outerFunction!
```

Another example that makes closures interesting:

```js
function createCounter() {
  let counter = 0;

  return () => {
    counter++;
    console.log(counter);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

### Why are closures useful?

1. Data privacy: Closures allow you to create private variables in JavaScript. In the prev. example counter can just be accessed and updated through the inner function and the way it was defined (invoking the counter fn strictly).
2. Stateful Functions: You can maintain the state between function calls, like keeping track of the count in the counter example.
3. Callbacks and Event handlers. Closures are frequently used in asynchronous programming (like `setTimeout`, `setInterval`, `fetch` calls, etc) because they allow the inner function to "remember" variables from the outer function even after the outer function has finished running.
