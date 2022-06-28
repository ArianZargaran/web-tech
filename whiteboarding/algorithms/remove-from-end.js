/**
 * 
 * Description:
 * -- Given a LL
 * -- remove those repeated values
 * -- return LL without duplicates
 * 
 * Time: O(n2)
 * Memory: O(1)
 */

 const removeFromEnd = (head, index) => {
  if(head === null) {
    return head;
  }

  let current = head;
  let length = 0;

  while(current.next !== null) {
    length++;
    current = current.next;
  }

  let i = length - index - 1;

  if(i < 0) {
    return head;
  }

  if(i === 0) {
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
