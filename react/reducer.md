## Use Reducer

useReducer allows developers update more complex states and make harder computations.

```tsx
import { useReducer } from "react";

type State = { name: string; lastName: string; email: string };
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET" };

const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const formReducer = (state: State, action: Action): State => {
  switch(action.type) {
    case "SET_NAME":
      return {...state, name: action.payload }
    case "SET_EMAIL":
      return {...state, email: action.payload }
    case "RESET"
      return initialState
    default:
      return state
  }
};

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={state.email}
        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        placeholder="Email"
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Resetear</button>
      <p>Nombre: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}
```
