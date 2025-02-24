## Redux

Redux is a library of predictable state management. Its purpose is to manage a centralized global state efficiently.

### Why Redux

While the App keeps growing, managing the state becomes hard and complicated due to:

- Props drilling
- Inconsistent state values
- Hard to purge errors.

Redux solves these issues by:

- Enabling one global store
- Including an unidirectional data flow (thread)
- Providing Actions and Reducers to manage state changes in a predictable way
- Having access of Redux DevTools that simplify debugging.

### Redux Principles

1. The Global State is stored in one object.
2. The Global State can just be updated through actions
3. Changes are made through Reducers; pure functions
4. The reducer receives the current state and an action, returns a new state without modifying it.

### Redux Data Flow\

1. The user interacts with the website.
2. A new action is dispatched.
3. The reducer manages the action and generates the state accordingly.
4. The store updates the state.
5. The components receive the updated state.

#### How to

1. Install the libraries

```bash
yarn add @reduxjs/toolkit react-redux
```

2. Create Reducers

```ts
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => (state.value += 1),
    decrement: (state) => (state.value -= 1),
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

```ts
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkMode: false },
  reducers: {
    toggleTheme: (state) => !state.isDarkMode,
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
```

3. Create the Store

```ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "counterSlice";
import themeReducer from "themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export RootState = ReturnType<typeof store.getState>;
export AppDispatch = typeof store.dispatch;
```

4. Consume the Provider

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

5. Consume the Global State

```tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement } from "./counterSlice";
import { toggleTheme } from "./themeSlice";

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h1>Redux Toolkit: Simple example</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <h2>Theme: {darkMode ? "🌙 Dark" : "☀️ Light"}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Change Theme</button>
    </div>
  );
}
```
