## Lazy Loading

Lazy loading is a way we have to load components in a differed way, improving the whole App performance.

### How to use it

- Loads components differed just when the app needs it.
- It reduces the initial bundle size on the app.
- Ideal to improve big sites' performance.

```jsx
import { lazy, Suspense } from "react";
import { FallbackComponent } from "falback-component";

const LazyComponent = lazy(() => import("whatever-component"));

return (
  <div>
    <h1>React Lazy Loading</h1>
    <Suspense fallback={<FallbackComponent />}>
      <LazyComponent />
    </Suspense>
  </div>
);
```

- `lazy(() => import("./whatever-module.tsx"))` loads the component just whenever is needed.
- `Suspense` shows a fallback component temporarily while the children component is loaded.
- You can do the same to load pages.
