/**
 * 1. Create Node with two pointers
 * 2. Create Linked List with the following methods:
 * - Insert
 * - Delete
 * - Access
 *  + Access an element given its position
 * - Search
 *  + Access an element given its value
*/

class Node {
  constructor(val, left = null, right = null) {
    super();
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

/**
 * By default, a Linked List comes with an empty node if no nodes are provided. 
 */
class DoubleLinkedList {
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
    /**
     * Si el head es null
     *  - return false O throw exception
     * Si el head NO es null
     * -- Si eliminamos el primer nodo
     * 
     * -- Si eliminamos el ultimo nodo
     * 
     * -- Si vaciamos la LL
     * 
     * -- Si el index es superior al length del linked list
     *  - return false O throw exception 
     */
    if(this.head === null) {
      // throw new Error("Error!! we weren't able to ")
      return false;
    }

    // When we want to remove the first element on the LL.
    if(index === 0) {
      this.head = this.head.next;
    }
    
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

  // return the node OR the value of that node;
  access(index) {
    const current = this.head;
    
    while(current !== null) {
      if(index === 0) {
        return current;
      }
      
      current = current.right;
      index--;
    }

    // When the given index > LL.length
    return false;
  }

  // return the node OR true if exists;
  search(value) {
    // Base case: When the value is somewhere in between the LL
    const current = this.head;
    
    while(current !== null) {
      if(current.value === value) {
        return true;
      }
      
      current = current.right;
    }

    // When the given index > LL.length
    return false;
  }

  #addToTail(val) {
    /**
     * If this.head === null;
     * -- this.head = node;
     *
     * If this.head !== null;
     * -- atraversar la LL hasta el final;
     * -- crear un nodo con el val
     * -- este nuevo nodo apunta con el left a current
     * -- este nuevo nodo apunta con el right a null
     */

    if(this.head === null) {
      this.head = new Node(val);
    }

    const current = this.head;
    while(current.right !== null) {
      current = current.right;
    }

    const node = new Node(val);
    node.left = current;
    current.right = node;

    return true;
  }
}