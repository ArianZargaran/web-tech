## Error Handling

Things to consider before even defining how we can handle code errors in JavaScript, we need to take into account some considerations:

- JavaScript has an object called `Error`;
- creating an Error instance does nothing by itself, but allows developers to handle the error as a feature.
- With the `throw` keyword we stop the execution of the program and notifies it.

### The Error object.

The `Error` object in JavaScript, as we were saying, can be instanced anytime to stop the execution of the program immediately. When called, it is built upon 3 pillars or inner keys:

1. The Name of the error, which is the Error itself by default, if it's not redefined.
2. The Message of the error, which in this case would be the message we pass as the first parameter.
3. The stack trace of the error, which tells us where the error has been produced and concatenation of

```js
const myError = new Error("Oops!");
myError.name; // "Error"
myError.message; // "Ooops!"
myError.stack; // Error: Oops! at <annonymous>...
```

## Catching errors in JavaScript

We have different ways to catch an error in JavaScript: `Try/Catch blocks`

### Try/Catch

When we want to handle an exception or error-prone piece of code on our program we can wrap it with a try/catch block;

```js
try {
  // do something..
  // check for the exception if some computation doesn't succeed
  throw new Error("This is an error!");
} catch (error) {
  // do something with the Error thrown without stopping the program completely and continue.
  console.log(error.message); // "This is an error!"
}
```

or going further:

```js
try {
  // do something..
  // check for the exception if some computation doesn't succeed
  throw new Error("This is an error!");
} catch (error) {
  // do something with the Error thrown without stopping the program completely and continue.
  console.log(error.message); // "This is an error!"
} finally {
  console.log("This piece of code will always run"); // This piece of code will always run
}
```

### Async Error Handling

The same way we used `Try/Catch` we can use the .catch method to handle an async request. So, it is important to cover the async calls, like promises, for instance, with .catch blocks like this:

```js
Promise.resolve("async call").then((response) => {
  throw new Error("FAILURE!");
}).catch(error) {
  console.log("There was an error: ": error)
};
```

With async/await expressions you can still use the try/catch block

```js
async function asyncFunc() {
  try {
    await setTimeout(() => {
      console.log("1 Sec operation");
      throw new Error("This is an error!");
    }, 1000);
  } catch (error) {
    console.log("Error properly handled: ", error);
  }
}

await asyncFunc();
```
