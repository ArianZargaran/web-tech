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

function Stack() {
  this.min = null;
  let top = null;

  const insertInOrder = (val) => {
    let min = this.min;
    let node = new Node(val);

    if(!min) {
      this.min = node;
      return;
    }

    if(min.val > val) {
      node.next = this.min;
      this.min = node;
      return;
    }
  
    while(node.val.next > min.val) {
      min = min.next;
    }

    node.next = min.next;
    min.next = node;
  }


  const deleteFromOrder = (val) => {
    let current = this.min;

    if(!current) {
      return;
    }

    if(current.val === val) {
      this.min = current.next;
      return
    }

    while(current.next && current.next.val !== val) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  this.pop = () => {
    // If top === null - Return error
    if(top === null) {
      return new Error({ message: "POP error: The Stack is empty" });
    }

    deleteFromOrder(top.val);

    // If top !== null - update top && return top's fist node 
    const node = top;
    top = top.next;
    return node;
  }

  this.push = (val) => {
    // If top !== null;
    // top gets updated to the new node and node.next is equal to the prev top;
    
    insertInOrder(val);
    
    let current = new Node(val);
    current.next = top;
    top = current;
  }

  this.peek = () => {
    if(top === null) {
      return new Error({ message: "The Stack is empty" });
    }

    return top;
  }

  this.isEmpty = () => {
    if(top === null) {
      return true;
    }

    return false;
  }
}