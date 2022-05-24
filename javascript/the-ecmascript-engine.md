# The ECMAScript Engine

An ECMAScript Engine or a Javascript Engine is a piece of software, (basically the program) that allows your machine to execute Javascript code, the source code.

## How does the JS Engine work?

_Input_: The JS Engine receives the JS file.

_Output_: Instructions Executed by the CPU. <br />
The JS Engine:

- **First, parses the JS code** extracting every single part of it
- With it, the engine creates an **Abstract Syntax Tree (AST)** to manage the source code.
- The **JIT Compiler** (Just-In-Time Compiler).

  - Ultimately, the source code needs to be interpreted by the engine to produce a binary executable (machine code) output.
  - So, the engine's **Interpreter** would read line by line in the code to produce **bytecode**. And in some cases, it would be enough for the JSEngine to work, BUT, there might be another layer of abstraction here.
  - JS Engines tend to be fast and source codes are not always optimized. The best EcmaScript Engines in the market, like V8, have what's called as **JIT Compilers** that;

    a. Interprets the code on the fly.

    b. Counts with a **profiler** which watches the routine willing to find those chuncks of code that can be optimized.

    c. Sends to the **compiler** those parts of the code that can be optimized and produces a final and optimized code instead.

### Popular ECMA Script Engines

Some of the most popular, fastest and common JS Engines are:

- **V8**. A JavaScript engine used in Google Chrome and other Chromium-based browsers, Node.js, Deno, and V8.NET.
- **SpiderMonkey**. A JavaScript engine in Mozilla Gecko applications, including Firefox.
- **JavaScriptCore**. Apple's engine for its Safari browser.

## Bibliography

- **Abstract Syntax Tree (ATS)** A tree-like breakdown of the source code that allows the JSEngine to understand what's going on with the code.

## Reference

- [JavaScript Engine](https://en.wikipedia.org/wiki/JavaScript_engine)
- [List of ECMAScript Engines](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)
- [ATS Explorer](https://astexplorer.net/)

## Interview questions

- **Is JavaScript an interpreted language?**
  When JavaScript first came in 1995-96, Brendan Eich created the very first JS-Engine called spider-monkey (Still used in Mozilla Firefox). At this time JavaScript was created keeping Browsers in mind. So that any file coming from the Servers would be quickly **interpreted** and shown by the Browsers.
  Interpreter was a best choice to do so, since Interpreters executes code line by line and shows the results immediately. Things have evolved now and performance is an issue. That's why JSEngines introduced compilers to optimize the code.
