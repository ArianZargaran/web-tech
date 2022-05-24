# Space and Time complexity

## Overview

There is a time and space required to execute an algorithm or routine.

The time varies from machine to machine, thus, we generally measure time as the amount of computational operations. As for space we generally measure the complexity by the amount of memory we allocate for the routine.

Why do we care? We care about time and space complexity for:

- Scalability
- Making better decisions
- Leads to improving efficiency and overcoming possible tradeoffs.
- Finding optimal solutions.
- Asymptotic notations Asymptotic notations help us quantify the runtime as the input approaches infinity.

- Big O notation represents the upper bound, (worst-case runtime) for a routine
- Big Omega represents the best-case runtime scenario for a routine.

With Asymptotic notation we simplify the order by dropping the coefficients and lowe-order terms. So a O(2n + 3) operation becomes a O(n) operation, so it has a linear time complexity.

- Common big orders
- Constant - O(1)
- Linear - O(n)
- Quadratic - O(n^2)
- Logarithmic - O(logn)
- Quasi-linear - O(nlogn)
- Exponential - O(c^n)
- Factorial - O(n!)

## Time complexity

When we talk about time complexity, we want to know about the rate of growth, as we increase te input size. Some of the common operations that affect time complexity are:

- Instantiating a variable is a constant time operation
- Looping through the elements on an array is a linear time operation.
- Printing is again constant.

## Space complexity

As we mentioned, it's the memory required to execute an algorithm. Which includes the input as well. When we DO NOT want to include the input space, we would refer to auxiliary space.
