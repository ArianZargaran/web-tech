## React rendering

A render happens when a component is evaluated to update the UI and that might occur under the next use-cases:

1. Initial Mount. When the component is mounted for the first time.
2. State Change. When the state is updated through `useState`.
3. Prop change in a component's parent. The child would be unmounted and re-rendered.
4. Change context. When a context to which the component is subscribed changes.

### What's a re-render

A re-render happens when React executes again the component and needs to update the UI. Nevertheless, React does not update the DOM unless the output of the render has changed.

```jsx
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked me {count} times
    </button>
  );
};
```

### Avoiding useless re-renders

1. useMemo and useCallback

```jsx
const MyComponent = ({ num }) => {
  const result = useMemo(() => {
    // really expensive calculation
    return num * 2
  }, [num])

  ...
  return <button>{result}</button>
}
```

- React can memorize values and functions to avoid useless calculations.

2. React.memo

```jsx
const MyComponent = React.memo(({ num }) => {
  const result = useMemo(() => {
    // really expensive calculation
    return num * 2
  }, [num])

  ...
  return <button>{result}</button>
});
```

- Avoid useless re-renders if the props never change.

3. `useRef` for persisting values

```jsx
const MyComponent = React.memo(({ num }) => {
  const countRef = useRef(0);

  const handleIncrement = () => {
    countRef.current += 1;
    // We can use ref to persist values now that the updated value is not used for rendering or updating the UI.
  };

  ...
  return <button onClick={handleIncrement}>{result}</button>
});
```

- The value for countRef.current changes without rerendering the component

### Interview questions

1. When is a render triggered in a React component?
2. How can you avoid useless rerenders in functional components?
3. What's the difference between `useState` and `useRef` in terms of re-renders?
4. How does a React.memo() work and when should you use it?
5. What's the difference between `useMemo` and `useCallback`?
6. What happens if a state doesn't change but setState is used?
