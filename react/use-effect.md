## Use Effect and its dependencies

useEffect is a hook for side-effects in React. Allows us to execute code after the first render. It's used to manage effects like API requests, subscriptions or manipulating the DOM.

### Syntax

```jsx
useEffect(() => {
  // Running code
}, [dependencies]);
```

- The function within the useEffect is executed when the code is mounted.
- Whenever the dependency changes (if it has dependencies).
- The array of dependencies controls when the code is re-executed.

### Use cases

1. Execute code when the component is mounted.

```jsx
const MyComponent = () => {
  useEffect(() => {
    // Code run when the component is mounted
  }, []);
};
```

- This code is run just once.

2. Execute when certain variables change

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("The value of count has changed " + count);
}, [count]);
```

- If `count` changes, `useEffect` will be re-executed.

3. Execute code whenever we need to unmount a component (Component Cleanup Effect)

```jsx
useEffect(() => {
  console.log("The component is mounted");

  return () => {
    console.log("The component is unmounted");
  };
});
```

4. Emulate an API call

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = response.json();
    console.log(data);
  }

  fetchData();
}, []); // executed just once
```

### Interview Questions

1. What's the difference between using `useEffect` with an empty array of dependencies or without an array?
2. How to avoid `useEffect` from being executed in every render?
3. Why `useEffect` can cause an infinite loop with a state as a dependency?
4. When is it recommended to use a cleaning up effect `returning a callback from a useEffect`?
5. How would you do to run the useEffect just once on mount?
6. How would you use `useEffect` to get subscribed to a `window` event and clean the subscription correctly?
7. What would it happen if you updated a dependency within a `useEffect`?
8. When is it better to use `useLayoutEffect` instead of `useEffect`?
9. What's the difference between a synchronous effect and an async effect within a `useEffect` callback?
10. How would you manage a `useEffect` that needs to be handled after a fetch but just if a specific state changes?
