/**
 * 1. Create Node
 * 2. Create Linked List with the following methods:
 * * Insert
 * * Delete
 * * Access
 * * Search
*/

class Node {
  constructor(val, next) {
    super();
    this.val = val;
    this.next = next || null;
  }
}

/**
 * By default, a Linked List comes with an empty node if no nodes are provided. 
 */
class LinkedList {
  constructor() {
    super();
    this.head = null;
  }

  insert(index, val) {
    /**
     * Base case: If head is null, replace head by the new node;
     */ 
    if(this.head === null) {
      this.head = new Node(val);
      return true;
    }

    /**
     * Regular insert: 
     * Traverse the LL to the index - 1.
     * Stablish the next node of the prev element to the coming node
     * If there is a next node: access the coming node and set its next to the old one
     */
    const current = this.head;
    while(current !== null) {
      /**
       * Regular case: 
       * We access the prev el and insert a new node to the right index;
       */
      if(index === 1) {
        const node = new Node(val, current.next);
        current.next = node;
        return true;
      }

      index--;
      current = current.next;
    }

    return this.#addToTail(val);
  }

  delete(index) {
    const current = this.head;

    while(current.next !== null) {
      if(index === 1) {
        current.next = current.next.next;
        return true;
      }

      index--;
      current = current.next;
    }

    return false;
  }

  #addToTail(val) {
    const current = this.head;
    while(current.next !== null) {
      current = current.next;
    }

    const node = new Node(val);
    current.next = node;

    return true;
  }
}










