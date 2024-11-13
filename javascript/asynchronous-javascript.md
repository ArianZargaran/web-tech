## Asynchronous Javascript

Talking about Asynchronous in JavaScript may sound counter intuitive when the language for web is defined as single-threaded.

Well, Async JS is a way of writing code that doesn't block other tasks from running while it waits for things like data to load, timers to complete, or user interactions.

JavaScript can start these tasks in the background and keep running other code, we know that, thanks to the JS Runtime.

### Ways to handle async tasks

1. Callbacks: You can pass a function as an argument to another function. That fn runs only after the first task is completed. The Web API comes with some handy methods to invoke and send to the callback queue.

```js
setTimeout(() => {
  console.log("This code is declared first, but runs after the sync calls");
}, 1000);

console.log("This code is declared second, but runs first");
```

```js
"This code is declared second, but runs first";
"This code is declared first, but runs after the sync calls";
```

2. Promises: Promises make it easier to handle async tasks in a more readable way. Also, come with built-in states to represent the async completion process: `pending`, `fulfilled` or `rejected`.

```js
let promise = new Promise((resolve, reject) => {
  // Do some async task
  // If something happens; resolve()
  // If something doesn't happen;
  // reject()
});

promise.then((result) => {
  // Output of the promise
});
```

3. Async/Await
   `async` and `await` are syntactic sugar for promises, making async code look more like normal, sync code. `await` pauses the function until the promise resolves.

```js
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = response.json();

  console.log(data);
}

fetchData();
```
