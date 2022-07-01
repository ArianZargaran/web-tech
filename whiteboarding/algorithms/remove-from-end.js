/**
 * Remove the node at a given index STARTING FROM THE END
 */

 const removeFromEnd = (head, index) => {
  // When the LL is empty
  if(head === null) {
    return head;
  }

  let current = head;
  let length = 0;

  while(current !== null) {
    length++;
    current = current.next;
  }

  let i = length - index - 2;

  if(i < -1) {
    return head;
  }

  if(i === -1) {
    head = head.next;
    return head;
  }

  current = head;

  while(current.next !== null) {
    if(i === 0) {
      current.next = current.next.next;
      break;
    }
    
    current = current.next;
    i--;
  }

  return head;
}

/**
 * Time complexity - O(n)
 * Space complexity - O(1)
 */

