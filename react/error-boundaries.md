## Error Boundaries

Error Boundaries are React Components that capture errors in the React Components Trees children avoiding the app to be completely broken.

With Error Boundaries we can make the app render friendly error messages and avoid a local error breaks the whole app.

```jsx
throw new Error("This is an Error"); // ❌ An error like this breaks the app
```

### Limitations

1. ErrorBoundaries don't capture errors in Error Handlers.
2. Async code errors.
3. SSR Errors
