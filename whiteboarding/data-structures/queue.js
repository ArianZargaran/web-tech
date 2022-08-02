/**
 * Queue
 * 
 * Complexities:
 * Access: O(n)
 * Seach: O(n)
 * Insert: O(1)
 * Delete: O(1)
 */


class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  add = (val) => {
    let current = new Node(val);

    if(this.first === null) {
      this.first = current;
      this.last = current;

      return;
    }

    last.next = current;
    last = current;
  }

  remove = () => {
    if(this.first === null) {
      throw new Error({ message: "The Queue is empty. Nothing to remove" });
    }

    let current = this.first;
    this.first = this.first.next;

    if(this.first === null) {
      this.last = null;
    }

    return current;
  }

  peek = () => {
    if(this.first === null) {
      throw Error({ message: "The Queue is empty" });
    }
    return this.first;
  }

  isEmpty = () => {
    if(this.first === null) {
      return true;
    }

    return false;
  }
}