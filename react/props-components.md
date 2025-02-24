## Props and components

A component is a function that returns a piece of UI.

### Props

- Props are pieces of data received from their parent.
- Destructuring props

```jsx
export const Greetings = ({ name }) => {
  return <h1>{`Hello ${name}!`}</h1>;
};
```

#### Combining props and state

Props change does not trigger a rerender. To do so you need a state update

```jsx
export const Counter = ({ defaultCounter }) => {
  const [counter, setCounter] = useState(defaultCounter);

  const onClick = useCallback(() => {
    setCounter(counter + 1);
  }, []);

  return <button>This button was clicked {counter} times</button>;
};
```

### Interview questions

1. What are React Components and what are they used for?
2. What's the difference between a functional component and a class component?
3. What are props and why are they immutable?
4. How can you set default values within components?
