## JS Modules

JavaScript Modules are a way to split code into smaller, reusable pieces that can be loaded independently and used wherever needed.

### IIFEs

In the early days of JavaScript, all code was included as a single, global scope. To mitigate this, developers came up with a solution like the IIFEs:

```js
(function () {
  const localVar = "I am private";

  console.log(localVar);
})();
```

- Each `<script>` tag is used to load JavaScript files.
- The load order was crucial or some dependencies would break.

### Module Systems: CommonJS

Popularized by Node.js to handle modular code in server-side JavaScript.

```js
// math.js
module.exports.add = (a, b) => a + b;

// main.js
const { add } = require("./math.js");

console.log(add(1, 3)); // 5
```

### ES Modules

ECMAScript 2015 (ES6) introduced a native, built-in module system called ES Modules:

- Built to work seamlessly in both browsers and Node.js
- Syntax: `import` and `export`.

```js
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./math.js";
console.log(add(4, 5)); // 9
```
