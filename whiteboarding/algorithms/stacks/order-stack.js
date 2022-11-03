/**
 * Goal: Order Stack min to max
 * 
 * Stack methods: push, pop, peek, isEmpty
 * 
 * You have a second temporary Stack
 * You don't have access to any other kind of data structures.
 */

function SortedStack(stack) {
  this.stack = stack;
  this.sorted = new Stack();

  if(this.stack.isEmpty()) {
    return this.stack;
  }

  while(!this.stack.isEmpty()) {
    let temp = this.stack.pop();
    let firstSorted = this.sorted.peek();

    while(temp < firstSorted) {
      this.stack.push(this.sorted.pop());
      firstSorted = this.sorted.peek();
    }

    this.sorted.push(temp);
  }

  return this.sorted;
}
