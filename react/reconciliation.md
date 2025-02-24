## Reconciliation

React uses to update the Real DOM efficiently.

### How does it work?

1. The user interacts with the app.
2. The Virtual DOM is updated accordingly and compares the prev. version with the new one.
3. React identifies those changes.
4. React updates the Real DOM on those elements, just the ones that changed without needing to refresh the page.

### Key list items

In order to identify list elements, specially since the list is mapped, React doesn't have a good way to diff sibling elements. It's a requirement to add a `key` prop passing a unique identifier per element.

```jsx
const DATA = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Peer",
  },
  {
    id: 3,
    name: "Grape",
  },
];

const MyComponent = () => {
  return (
    <ul>
      {DATA.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};
```
