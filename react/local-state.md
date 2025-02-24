## State and useState

Also known as local state, it's what allows components to be updated without needing to refresh the whole page. The state update is what makes the component to be re-rendered. For instance:

```jsx
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      The button has been updated {counter} times!
    </button>
  );
};
```

The useState returns an array with two values:

- Current value of the state
- Method to update the value of the state

### Dynamic initial values

The useState hook receives one value as the `default` value. If the initial default value requires computations, you can pass a function that would just run once:

```jsx
const [state, setState] = useState(() => Math.random());
```

### When the state is an array or an object

You can create a reference to the current state and update it spreading the current value + just updating the keys you'd need to. For instance:

```jsx
const [state, setState] = useState({ name: "Arian", lastName: "Zargaran" });

/* Later on **/

setState((prevState) => ({ ...prevState, name: "Daniel" }));
```

or

```jsx
const [state, setState] = useState(["Arian", "Zargaran"]);

/* Later on **/

setState((prevState) => [...prevState, "Daniel"]);
```

### Derived State

Concatenating state updates will never result in a subsequent update of the state because React groups renders into one. For instance. You can't say:

```jsx
const [counter, setCounter] = useState(0);

setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);

// Returns 1
```

This doesn't translate essentially in 3. In order to achive so you need to update the state organizing the queue of calls.

```jsx
const [counter, setCounter] = useState(0);
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);
setCounter((prevCounter) => prevCounter + 1);

// Returns 3
```

#### Interview questions

1. How does useState work in React?
2. Why can't we modify the state directly, meaning; state = newValue?
3. What does it happen when we call several times setState in the same render?
4. What's the difference between updating the state with setState(newValue) vs. setState(prevState => newValue)?
5. When is it recommended to use a function with initial Value callback, useState(() => initialValue)?
6. How would you use a state that contains an object or an array without mutating it?
7. What happens if the state is not used in the UI but it's used within a useEffect?
8. How to avoid useless re-renders when updating the state?
9. What's the difference between useState and useRef to keep values between renders?
10. How to differentiate a local state and the global state?
