## Execution Context

When programming, on any language we do just two things; assign a variable, and call functions. That's all.

We call functions by using the `()` operator.
Whenever we call a function, we are creating a new execution context and adding it to the Call Stack.

But the code doesn't run in the empty space. Initially the JS Engine creates a global execution context and adds it to the Call Stack.

In a browser, the global execution context is the `window` object, which at the end is also referenced under the `this` keyword (for now). In Node.js the global execution context is the `global` object.

### Lexical Environment

What's the lexical environment? It's the scope of a variable. It's the place where the variable is defined.
Depending on where the variable is defined, it will get a different lexical environment, and with it, different properties that can be accessed.

In Javascript, the _lexical scope_ (the available data + the variables where the function was DEFINED), determines our available variables. NOT where the function is called, which is the _dynamic scope_.
