## Memoization

Memoization is a way to cache a return value of a function based on its parameters. That means that, when a function takes long to run on the first time, should run much faster after subsequent runs while the parameters were already used before.
If the parameter changes and has never used before, the function would need to be reevaluated.
Let's see it with an example:

```js
// ❌ BAD WAY
function addTo80(n) {
  console.log("long time processing operation...");
  return n + 80;
}

addTo80(5); // long time processing operation... 85
addTo80(5); // long time processing operation... 85
addTo80(5); // long time processing operation... 85

// Memoized Way
function memoizedAddTo80() {
  let cache = {};

  return function () {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time processing operation...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log("1. ", memoized(5));
console.log("2. ", memoized(5));
console.log("3. ", memoized(5));
console.log("4. ", memoized(5));
console.log("5. ", memoized(10));

/**
 * long time processing operation...
 * 1. 85
 * 2. 85
 * 3. 85
 * 4. 85
 * long time processing operation...
 * 5. 90
 */
```
