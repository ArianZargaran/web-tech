## Navigation with React Router DOM

React Router is the most popular library to manage routes in React Apps. This allows to change pages without recharging the page.

### Principals

#### Routes

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/foo" element={<PageI />} />
    <Route path="/product" element={<PageII />} />
    <Route path="/" element={<PageIII />} />
  </Routes>
</BrowserRouter>
```

BrowserRouter - Wraps the App and enables routing
Routes - Routes container
Route - Defines an specific route

#### Links

```jsx
<nav>
  <Link to="/">Home</Link>
  <Link to="/product">Product</Link>
  <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "default" } to="/product">Product</Link>
</nav>
```

Link - Redirects to a different page
NavLink - Aggregates states to classNames among others

#### Parameters

```jsx
// Definition of the route with parameter

<Routes>
  <Route path="/product/:id" element={<MyPage />} />
</Routes>
```

```jsx
// How to manage parameters

const MyPage = () => {
  const { id } = useParams();

  return <h1>{id}</h1>;
};
```

#### Query Params

```jsx
import { useSearchParams } from "react-router-dom";

const MyComponent = () => {
  const [queryParams] = useSearchParams();

  const filter = queryParams.get("filter");

  return <h1>Filter applied: {filter}</h1>;
};
```

- If we are visiting a route: `/user?id=42&filter=active` filter would have the value of "active".

#### Redirections

```jsx
const MyComponent = () => {
  const navigate = useNavigation();

  const handleClick = () => {
    navigate("/foo");
  };

  return <button onClick={handleClick}>Click Me!</button>;
};
```
