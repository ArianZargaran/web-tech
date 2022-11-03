/**
 * Create a Queue class from two Stacks
 * methods:
 ** Add
 ** Remove
 */

class Queue {
  constructor() {
    this.reverserStack = new Stack();
    this.orderedQueueStack = new Stack();
  }

  add = (val) => {
    while(!this.orderedQueueStack.isEmpty) {
      const node = this.orderedQueueStack.pop();
      this.reverserStack.push(node.val);
    }

    this.reverserStack.push(val);

    while(!this.reverserStack.isEmpty) {
      const node = this.reverserStack.pop();
      this.orderedQueueStack.push(node.val);
    }
  }

  remove = () => {
    this.orderedQueueStack.pop();
  }
}