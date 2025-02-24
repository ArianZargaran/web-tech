/**
 * 
 * Description:
 * -- Given a LL
 * -- remove those repeated values
 * -- return LL without duplicates
 * 
 * Time: O(n)
 * Memory: O(n)
 * 
 */

const removeDuplicates = (head) => {
  if(head == null) {
    return null;
  }
  
  let cache = new Set([head.val]);
  let previous = head;
  let current = head.next;

  while(current !== null) {
    if(cache.has(current.val)) {
      previous.next = current.next;
    } else {
      cache.add(current.val);
      previous = previous.next;
    }

    current = current.next;
  }

  return head;
}
