## The ECMAScript Engine: Call Stack and Memory Heap

### The Memory Heap

The memory heap is where the memory allocation happens. Here the information is stored and written. Allocate, use and release memory. (Metaphor: The drawer).

### The Call Stack

The CS is where the engine keeps track of where your code is in execution. It runs in a last-in/first-out (LIFO) kind of order. The JSEngine piles up the different steps (generally jumping line-by-line through the code), it needs to execute in order to complete the whole routine.

#### Key concepts around Memory Heap and the Call Stack

- **Stack Overflow**
  The Call Stack pile is limited. That's something we need to know from the early beginning. The browser itself has its own boundaries of what's called as address space. This limit may vary for many reasons.
  Attempting to access memory beyond the call stack's bound results in a program crash.

- **Memory Leaks**
  Memory leaks happen when the browser has not enough space to store information in the Memory Heap and the program tries to get the reference of it.
  **TRICK!** Reducing the global variables, removing the event listeners or cleaning up the setIntervals are good practices that show how the developer cares about the memory management.

##### Garbage Collection

We are "safe" yes, JS is a Garbage collected language. BUT, what does this exactly mean?

When JS allocates memory and finishes using that piece of code; it will automatically clean it up for us. Only the useful data remains. This garbage collection process prevents memory leaks.

The problem comes when we try to determine how this garbage-collection process is done. Also, it gives us a false sense of security over the memory management.

The algorithm used to perform the garbage collection is called **mark and sweep**. And how dos it work? Well, simple:

- While the code is running, the program creates the variables it needs.
- These variables point to different objects.
- As soon as we remove the reference from that object, it should get deleted.
- Then the object is NOT marked. In other words, since it's not linked, it's not marked.
- And since it's not marked, it is swept.

[> Go to the Index <](../README.md)
[< Prev: 1. The ECMAScript Engine](./the-ecmascript-engine.md)
[Next: 3. Javascript Runtime >](./javascript-runtime.md)
