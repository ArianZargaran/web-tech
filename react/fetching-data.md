## Fetching data

In order to fetch data within a component on a React Client Component we'll need to make use of `useEffect`.

```tsx
const MyComponent = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useLoading<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("whatever-endpoint")
      .then((response) => response.json())
      .then((retrievedData) => {
        setData(retrievedData);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return <h1>{data}</h1>;
};
```
