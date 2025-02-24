## JSX and the Virtual DOM

JSX is a Javascript extension, syntactic sugar that allows us to write code similar to HTML. React uses JSX in a declarative way.

```.jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>
}
```

It looks like HTML, but under the hood, it's actually JavaScript. This code ultimately transpiles to:

```
function Greeting({ name }) {
  return React.createElement("h1", null, `Hello, ${name}!`);
}
```

NOTE: JSX is not needed in React but makes code way more readable and easier to write.

Considerations:

- JS expressions in the return go in `{}`
- No `if` within `{}`
- Just one element is returned
- If needed, you can use fragments `<></>` to return more than one element.
- `class` attribute becomes `className` and `for` becomes `htmlFor`

## Virtual DOM

The Virtual DOM is a memory representation of the Real DOM. React uses it to efficiently update the page without modifying the DOM directly.

### How it works

1. React recreates a Virtual DOM (Copy of the Real DOM).
2. Every time there's a change on the state, the Virtual DOM is recreated.
3. React compares the new Virtual DOM and the old one (Diffing).
4. React just updates the needed pieces onto the Real DOM (Reconciliation).

## Pros

- The Virtual DOM is peformant
- Avoids useless repainting
- It makes development declarative, not imperative

### Interview questions

1. What's JSX and what's used for in React?
2. What's the difference between JSX and HTML?
3. How is JSX translated to pure JavaScript?

4. What's the Virtual DOM and why's important?
5. How does the Virtual DOM reconciliation work?
6. When does React re-render a component?
