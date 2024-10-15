## Scopes

Scope in Javascript refers to the accessibility or visibility of variables within different parts of the code. In practical words, it means where variables can be accessed or used. Javascript has two scopes: Global Scope and Local Scope, (unlike other languages that have also block scope).

### Types of scopes

#### Global Scope:

- Variables declared outside of any function or block are in the global scope.
- These variables can be accessed from anywhere in the code.

#### Local Scope:

- Function Scope: Variables declared inside a function are confined to that function and cannot be accessed out of it.
- Block Scope: Variables declared inside a block (for instance within a `{}` for `if`, `for`, or `while` blocks) are confined to that block. This applies to variables declared with `let` and `const`.

### var, let and const

Javascript has three keywords for declaring variables: `var`, `let`, `const`. These keywords determine how variables behave in terms of `scope` and `mutability`.

- `var`: Just Function-scoped and mutable.
  Variables declared with `var` are scoped to the nearest (in terms of inheritance, not proximity) function or globally (if declared previously out of a function). `var` **ignores block scope** and can be reassigned.

  ```js
  function testVar() {
    if (true) {
      var x = 10;
      console.log(x); // Output: 10;
    }
    console.log(x); // Output: 10 (accessible outside the if block);
  }

  testVar();
  ```

- `let`: Mutable and Block-scoped
  Let variables are scoped to the nearest block or function. They are mutable, so they can be reassigned.

  ```js
  function testLet() {
    if (true) {
      let y = 20;
      console.log(y); // Output: 20;
    }
    console.log(y); // Error: y is not defined
  }

  testLet();
  ```

- `const`: Block-scoped, constant value
  Variables declared with `const` are also block-scoped, just like `let`. However, they cannot be reassigned.

```js
function testConst() {
  if (true) {
    const z = 30;
    console.log(z); // Output: 30
  }
  console.log(z); // Error: z is not defined
}

testConst();
```
