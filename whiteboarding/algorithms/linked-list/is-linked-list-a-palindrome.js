function isLinkedListAPalindrome(head) {
  if(head === null) {
    return false;
  }

  let stack = new Stack();
  let slowPointer = new Node();
  let fastPointer = new Node();
  slowPointer.next = head;
  fastPointer.next = head;

  while(fastPointer.next !== null) {
    if(fastPointer.next.next === null && slowPointer.next !== null) {
      slowPointer = slowPointer.next.next;
      break;
    }

    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    stack.push(slowPointer.val);
  }

  if(fastPointer.next === null) {
    slowPointer = slowPointer.next;
  }

  while(stack.length > 0) {
    if(slowPointer.val === stack.pop()) {
      slowPointer = slowPointer.next;
    } else {
      return false;
    }
  }

  return true;
}

function isLinkedListAPalindrome2(head) {
  if(head === null) {
    return true;
  }

  let slowPointer = head;
  let fastPointer = head;
  const stack = new Stack();

  while(fastPointer !== null && fastPointer.next !== null) {
    stack(slowPointer.val);

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  if(fastPointer !== null) {
    slowPointer = slowPointer.next;
  }

  while(stack.length !== 0) {
    if(stack.pop() !== slowPointer.val) {
      return false;
    }

    slowPointer = slowPointer.next;
  }

  return true;
}