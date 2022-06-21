// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicatesUnsorted = function(head) {
  if(head === null) {
      return head;
  }
  
  const cache = new Set();
  let current = head;
  const repeatedValues = new Set();

  while(current !== null) {
      if(!cache.has(current.val)) {
          cache.add(current.val);
      } else {
          repeatedValues.add(current.val);
      }
      
      current = current.next;
  }

  current = head;
  let dummy = new ListNode();
  let prev = dummy;
  
  while(current !== null) {
      if(!repeatedValues.has(current.val)) {
        prev.next = current;
        prev = prev.next;
      }

      current = current.next;
  }
  
  prev.next = null;

  return dummy.next;
};
