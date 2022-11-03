/**
 * Description:
 * -- Given a LL
 * -- remove those repeated values
 * -- return LL without duplicates
 * 
 * Time: O(n2)
 * Memory: O(1)
 */

const removeDuplicates = (head) => {
  if(head === null) {
    return head;
  }

  let slowPointer = head;
  let fastPointer = head;

  while(slowPointer !== null) {
    while(fastPointer.next !== null) {
      if(slowPointer.val === fastPointer.next.val) {
        fastPointer.next = fastPointer.next.next; 
      }

      fastPointer = fastPointer.next;
    }

    slowPointer = slowPointer.next;
    fastPointer = slowPointer;
  }

  return head;
}
