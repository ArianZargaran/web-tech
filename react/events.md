## Events in React

Two considerations when it comes to React events. They are declared in camelCase and are passed as functions, not as strings.

```html
<button onclick="handleClick()">Click me</button>
```

becomes

```jsx
<button onClick={handleClick}>Click button!</button>
```

### Synthetic events

React wraps the native events within a Synthetic event to normalize behaviors in different browsers.

```tsx
function MyComponent() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event); // synthetic event
    console.log(event.nativeEvent); // native browser event
  };

  return <button onClick={handleClick}>Click Me!</button>;
}
```

### Passing arguments to an event handler

We don't call the function as it might look like in html, but we use a callback.

```jsx
<button onClick={() => handleClick(10)}>Click Me</button>
```

### Controlling forms

```tsx
const MyInput = () => {
  const [value, setValue] = useState<string>("")

  const handleClick = (e: React.ChangeEvent<HTMLImputElement>) => {
    setValue(e.target.value);
  }

  return (
    <input value={value} onClick={handleClick}>
  )
}
```

### Preventing default behavior

Some events, like `onSubmit`, have predetermined behaviors on the browser that could interfere the app logic. A pretty clear example is preventDefault.

```tsx
const MyFunction = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form sent!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send!</button>
    </form>
  );
};
```

### Keyboard events

To handle keyboard navigation we can make use of `onKeyDown`, `onKeyPress` or `onKeyUp`.

```tsx
const MyComponent: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("You pressed Enter!");
    }
  };

  return <input type="submit" value={value} />;
};
```

### Performance

For performance reasons, it's important to use `useCallback` to avoid constant recreation of callbacks on every render.

```tsx
const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = useCallback<React.ChangeEvent<HTMLInputElement>>(
    (event) => {
      setValue(event.target.value);
    }
  );

  return <input onChange={handleChange} value={value} />;
};
```

### Key Takeaways

- React uses Synthetic Events to normalize events between browsers.
- Use camelCase and pass functions instead of strings as in native events.
- To cancel an event you need to call event.preventDefault().
- To pass arguments on events, just use arrow functions.
