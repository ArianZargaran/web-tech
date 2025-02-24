## Client Components vs Server Components

### React Client components

Interactions that require immediate feedback to the user, like a Counter, for instance, is code that's executed on the user's device. First of all because it doesn't depend on the server at all. This implies no latency or delays when re-rendering after state updates.

```.jsx
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
}
```

- Cons:

* You are loading an extra amount of JS to the client on the initial call.
* Delaying the load because the component fetches the data first on the client side;
* Need to handle the side-effects, the state update, maybe useless at this point

### React Server components

Those components attached to data processing hosted at the server, like counting the number of words in an article, is more efficient to execute this component at the server. This allows to transfer less amount of data on the initial call.

```.jsx
async function ProductList() {
  const products = await fetch("https://api.example.com/products").then((res) =>
    res.json()
  );

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
}

export default ProductList;
```

- Pros:

* The code is cleaned at the server side and just sent pure HTML to the user.
* The data is rendered when the page is delivered.
* No useState or useEffect is needed since that data is not used at the client side.

### Key Ideas

- If the component manages interactivity from the user (forms, buttons, effects), it's better to use Client Components.
- If the component just shows static data or pre-rendered data, use Server Components to optimize the performance.

#### References

- overreacted.io: Two Reacts:
  https://overreacted.io/the-two-reacts/
