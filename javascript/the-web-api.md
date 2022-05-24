## The Web Api

Following with the previous section, we mentioned...

> "Can you imagine what would happen IF the browser was single-threaded? You would just be able to run one program or one function at a time. Well, this is not the case AT ALL. While the synchronous Javascript code is running, the browser works on the background."

To do so, the browser makes use of the **Web API**. The Web Api comes with the browser. Web APIs can do a variety of things like: sending HTTP requests, listening to DOM events, caching, using the database storage on the browser, etc.

Browsers, underneath the hood use low level programming languages like C++ to perform operations, out of the JS engine's (single threaded) Call Stack.
These Web API operations are asynchronous, and they are not blocking your code's thread.

In summary, Web API methods are injected into the JS Engine Call Stack like this:

1. First, they are called from the JS Engine's Call Stack as any other statement of your code.
2. Grabbed from the browser's Web API
3. Executed in the background while the JS Engine's Call Stack continues.
4. Pushed to the Callback Queue.
5. When the Call Stack is empty, then returned to the JS Engine's Call Stack.
