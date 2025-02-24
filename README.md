# web-tech

All you need to know for your next gig.

## I. Javascript. The language for The Web.

### Javascript Foundation I

1. [The ECMAScript Engine](./javascript/the-ecmascript-engine.md)
2. [The Call Stack and Memory Heap](./javascript/the-call-stack-and-memory-heap.md)
3. [Javascript runtime](./javascript/javascript-runtime.md)

- [The Web API](./javascript/the-web-api.md)
- [The Callback Queue](./javascript/the-callback-queue.md)

4. [Node](./javascript/node.md)

- [Babel](./javascript/babel.md)
- [Typescript](./javascript/typescript.md)
- [Web Assembly](./javascript/web-assembly.md)

### Javascript Foundation II

1. [Execution Context & Lexical Environment](./javascript/execution-context.md)
2. [Hoisting](./javascript/hoisting.md)
3. [Scopes: var, let and const](./javascript/scopes.md)
4. [Functions vs Objects](./javascript/functions-vs-objects.md)
5. [Closures](./javascript/closures.md)
6. [Prototypal Inheritance](./javascript/prototypal-inheritance.md)
7. [OOP with Classes](./javascript/oop-with-classes.md)
8. [Functional Programming](./javascript/functional-programming.md)
9. [Asynchronous Javascript](./javascript/asynchronous-javascript.md)
10. [JS Modules](./javascript/js-modules.md)

### JS Good practices

1. [Memoization](./javascript/memoization.md)
2. [How to use the `arguments` keyword](./javascript/arguments.md)
3. [Call, apply and bind](./javascript/call-apply-bind.md)
4. [Javascript Types](./javascript/types.md)
5. [Error handling](./javascript/error-handling.md)

### II. Web fundamentals.

1. [Web Security for Front-End Devs](./javascript/web-security.md)

### III. Front-End Tech Stack

1. [Typescript](./tech-stack/typescript.md)
   1.1. Fundamentals
   1.1.1. [Configuration and good practices](./typescript/configuration.md)
   1.1.2. [Types](./)
   1.1.3. [Strong typing vs flexible](./)
   1.1.4. [Interfaces vs Types](./)
   1.2. Advanced Types and Composition
   1.2.1. [Unions | and Intersections &](./)
   1.2.2. [Indexed Types (Records, keyof, typeof)](./)
   1.2.3. [Conditional Types (extends, infer)](./)
   1.2.4. [Mapped Types](./)
   1.3. Functions and Typing Patterns
   1.3.1. [Functions Overloads](./)
   1.3.2. [Inference of callback types](./)
   1.3.3. [Currying and composition of Typescript](./)
   1.4. Types manipulation with Template Literals and Utility Types
   1.4.1. [Template Literal Types](./)
   1.4.2. [Advanced usage of `infer`](./)
   1.4.3. [Create own utilities](./)
   1.5. Typescript and Real Projects
   1.5.1. [Usage with React and Context + Reducers](./)
   1.5.2. [Typescript in Libraries open-source](./)
   1.5.3. [Validation with Zod](./)
   1.6. Optimization and Good Practices
   1.6.1. [Inferences control and performance](./)
   1.6.2. [Avoiding common problems with `strict` and `noUncheckedIndexedAccess`](./)
   1.6.3. [Secure Typing for API calls](./)
   1.7. Advanced Challenge
   1.7.1. [Implementation of `TupleToUnion`, `UnionToTuple` and `MergeDeep`](./)
   1.7.2. [Typed Tests](./)
2. [React](./tech-stack/react/index.md)
   2.1. Fundamentals
   2.1.1. [JSX & Virtual DOM](./react/jsx-virtual-dom.md)
   2.1.2. [Props and Components](./react/props-components.md)
   2.1.3. [State and useState](./react/local-state.md)
   2.1.4. [Events in React (onClick, onChange)](./react/events.md)
   2.1.5. [Conditional Rendering](./react/conditional-rendering.md)
   2.1.6. [Client Components vs Server Components](./react/client-components-server-components.md)
   2.2. State Management and Life Cycle
   2.2.1. [useEffect and its dependency](./react/use-effect.md)
   2.2.2. [Render and rerender](./react/rendering.md)
   2.2.3. [Lifting state up](./react/lifting-state-up.md)
   2.2.4. [Context API vs Prop Drilling](./react/context-api-prop-drilling.md)
   2.3. React Router and Data Management
   2.3.1. [Navigation with react-router-dom](./react/navigation.md)
   2.3.2. [Fetching Data with fetch and useEffect](./react/fetching-data.md)
   2.3.3. [Error Boundaries](./react/error-boundaries.md)
   2.4. Performance and Optimization
   2.4.1. [Lazy loading with React.lazy and Suspense](./react/lazy-loading.md)
   2.4.2. [Reconciliation and lists key](./react/reconciliation.md)
   2.5. Global State and Advanced Management
   2.5.1. [useReducer](./react/reducer.md);
   2.5.2. [Redux Toolkit](./react/redux.md)
   2.5.3. [Zustand or Jotai as alternatives](./)
   2.5.4. [Form management with react-hook-form](./)
   2.6. Testing
   2.6.1. [Jest and React Testing Library](./)
   2.6.2. [Unit Testing vs E2E Testing](./)
   2.6.3. [API Mocks with msw](./)
   2.6.4. [Accessibility testing](./)

### How does the Internet work?

1. [How does the Internet work?](./web-fundamentals/how-does-the-internet-work.md)

- [Web protocols](./web-fundamentals/web-protocols.md)

- [The server](./web-fundamentals/the-server.md)

2. [The web flow diagram](./web-fundamentals/web-diagram.md)
3. [The email flow diagram](./web-fundamentals/email-diagram.md)
4. [Network basics](./web-fundamentals/network-basics.md)
5. [Network ports](./web-fundamentals/network-ports.md)
6. [The Web Development Process](./web-fundamentals/the-web-development-process.md)

- 1. Plan and create a Flow Diagram of the Web App.
- 2. [Determine the Hosting Solution](./web-fundamentals/hosting.md)
- 3.  [Register a Domain Name](./web-fundamentals/register-domain-name.md)
- 4.  [Setup a Local Testing Server](./web-fundamentals/setup-local-testing-server.md).
- 5.  [Configure a Production Server](./web-fundamentals/production-server-setup.md).
- 6.  Install and Setup the FTP Service.
- 7.  Develop the Front-End of the Web Application.
- 8.  Setup/Config the database with SQL.
- 9. Interact with your database with your Back-End.
- 10. Upload the website using an FTP Service.
- 11. Configure the DNS Records Config, so that the website domain translates into the website IP address.
- 12. Configure and Setup the email & SMTP Service to have a custom email address under your domain.

## III. Whiteboarding.

1. [Time and space complexity](./whiteboarding/time-and-space-complexity.md)
2. [Algorithms](./whiteboarding/algorithms.md)
3. [Data structures](./whiteboarding/data-structures.md)
