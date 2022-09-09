/**
 * Stack
 * 
 * Complexities:
 * Access: O(n)
 * Seach: O(n)
 * Insert: O(1)
 * Delete: O(1)
 */

function Node(val = null) {
  this.val = val;
  this.next = null;
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop = () => {
    // If top === null - Return error
    if(top === null) {
      return new Error({ message: "POP error: The Stack is empty" });
    }

    // If top !== null - update top && return top's fist node 
    const node = top;
    top = top.next;
    return node;
  }

  push = (val) => {
    // If top !== null;
    // top gets updated to the new node and node.next is equal to the prev top;
       
    let current = new Node(val);
    current.next = top;
    top = current;
  }

  peek = () => {
    if(top === null) {
      return new Error({ message: "The Stack is empty" });
    }

    return top;
  }

  isEmpty = () => {
    if(top === null) {
      return true;
    }

    return false;
  }
}

class StackWithMin {
  constructor() {
    this.stack = new Stack();
    this.minValsStack = new Stack();
  }

  min = () => {
    return this.minValsStack.peek();
  }
  
  push = (val) => {
    /**
     * Introducimos un nuevo nodo en el this.stack
     * Comparamos el valor del nodo con el this.min
     * -- Si this.stack está vacío; simplemente introducimos el nodo en this.minValsStack
     * -- Si this.minValsStack.peek es menor que el valor; introducimos this.minValsStack.peek otra vez en this.minValsStack
     * -- Si this.minValsStack.peek es mayor que el valor; introducimos el valor en this.minValsStack.
     */

    const node = new Node(val);
    this.stack.push(node);

    if(this.stack.isEmpty() || this.minValsStack.peek().val > node.val) {
      this.minValsStack.push(node);
      return;
    }

    if(this.minValsStack.peek().val < node.val) {
      this.minValsStack.push(this.minValsStack.peek());
      return;
    }
  }

  pop = () => {
    /**
     * Eliminamos un nuevo nodo en el this.stack
     * this.minValsStack.pop();
     */
    this.minValsStack.pop();
    return this.stack.pop();
  }
}

