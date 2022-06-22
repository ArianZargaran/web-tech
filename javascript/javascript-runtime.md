## Javascript runtime

"Javascript is a single threaded programming language. This means, the execution of a program is dependant on the order of the statements. There's just one Call Stack and one Memory Heap."

True, but also misleading. Because the JS code runs within its environment. It might be on the server-side (Node.js), or the front-end side of a website, for instance, or even out of the web-dev environment. So, the JS Engine is, so to speak, GENERALLY not alone. Let's see the diagram:

![The Runtime Diagram](../resources/javascript-runtime-diagram.png)

We already know that the **JS Engine** interprets or compiles+executes your JS source code.

Can you imagine what would happen IF the browser just had the JS Engine, hence, just executed code in a single thread? You would just be able to run one program or one function at a time. Well, this is not the case AT ALL. While the synchronous Javascript code is running, the browser works on the background.

To do so, the browser makes use of the **Web API**. Accessing the `window` object with all its properties and methods (that run asynchronously) is just an example of a Web API that runs on the background. Okay, so, how are the Web API operations results added to the JS Engine's Call Stack?

Easy, that lands on the **Callback Queue**'s duty.
The Callback Queue just:

1. Holds the results (as callbacks) of the Web API operations in a Queue.
2. Waits for the JS Engine's Call Stack to be empty.
3. Adds the results to the Call Stack in order.

## Reference

There's this cool tool that helps you to visualize the JS Runtime schema called Loupe:

- http://latentflip.com/loupe/
- Built by [@philip_roberts](https://twitter.com/philip_roberts) emulates the JS Runtime flow for any given chunk of code. You can also emulate page renders and how this interacts with the browser.
- Philip Roberts has this awesome talk titled [WTH is the JS Runtime anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=5s) which's worth a watch.

[> Go to Index <](../README.md)
[< Prev: 2. The Call Stack and Memory Heap](./the-call-stack-and-memory-heap.md)
[Next: 3.1. The Web API >](./the-web-api.md)
