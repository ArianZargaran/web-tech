## Conditional Rendering

In React, conditional rendering allows you to show or hide elements based on a condition.

### &&

```jsx
<>{isLoggedIn && <h1>Welcome back!</h1>}</>
```

- If isLoggedIn is true; the <h1> is rendered
- if isLoggedIn is false; there's nothing rendered

### Ternary operator ? :

```jsx
<h1>{isLoggedIn ? "Logged in!" : "Logged out!"}</h1>
```

- If isLoggedIn is true; "Logged in!" will be rendered
- If isLoggedIn is false; "Logged out!" will be rendered

### ||

```jsx
const name = user.name || "Guest";
```

- If user.name is not `null` or `undefined`, or `""`; user.name will be rendered.
- If user.name is `nullish`; `Guest` will be rendered

### `if` inside a function body

```jsx
const MyComponent = ({ user }) => {
  if (!user) {
    return null;
  }

  return <h1>{user}</h1>;
};
```

- If user is not defined or nullish; nothing would be rendered;
- If user is defined, then the <h1> would be rendered;

### Interview Questions

1. What's the difference between `&&` and `? :`?
2. When should you be using `null` instead of a conditional?
3. How to avoid errors when you use a `&&` expression?
