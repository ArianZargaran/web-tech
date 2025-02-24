## Context API vs Props Drilling

As we just saw in the previous sections, there's chances several components consume the same pieces of data. In order to share data between components there's to options (with pros-cons) to perform:

### Props Drilling

```jsx
const MyGrandParentComponent = () => {
  const [value, setValue] = useState(0);

  const handleChangeValue = (childValue) => {
    setValue(childValue);
  };

  return <MyParentComponent value={value} onChange={setValue} />;
};

const MyParentComponent = ({ value, onChange }) => {
  return <MyChildComponent value={value} onChange={onChange} />;
};

const MyChildComponent = ({ value, onChange }) => {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
};
```

Props drilling consists on passing data between components on the React Components Tree through props.

- Pros:
- - Useful for small structures

- Cons:
- - Hard to follow when structures are complex

### Context

Context is a way to pass data globally or, to a specific scope of the React Components Tree, avoiding Props Drilling.

```jsx
import { createContext, useContext } from "react";

// Create and initialize Context
const UserContext = createContext({ name: "", lastName: "" });

// Create Context Consumer Hook
const useUserContext = () => {
  return useContext(UserContext);
};

// Wrap the App/Chunk of the React Components Tree with the Provider
/.../;
return (
  <UserContext.Provider
    value={{
      name: "Arian",
      lastName: "Zargaran",
    }}
  >
    <App />
  </UserContext.Provider>
);

// Consume the data
const MyChildComponent = () => {
  const data = useUserContext();

  return (
    <h1>
      Hello {data.name} {data.lastName}!
    </h1>
  );
};
```

- Pros:
- - Avoids Props Drilling
- - Data is accessed from all the components wrapped by the Provider

- Cons:
- - It could lead to useless re-renders
