/* 
* Input - Two Linked Lists
* Routine - Each LL produces a final integer. For instance the following LL:
* 7 -> 1 -> 6 -> null
* should proce number 617;
* Given two LLs.
* Sum up both resulting integers
* 
* Examples: 
* 7 -> 1 -> 6 -> null // 617
* 5 -> 9 -> 2 -> 1 -> null // 1295
* Result: 2 -> 1 -> 9 -> 1 -> null // 1912
**/

function linkedListAdding(head1, head2, remainder = 0) {
  // Base case
  if(head1 === null && head2 === null && !remainder) {
    return null;
  }

  const current = new Node();
  let value = remainder;
  if(head1 !== null) {
    value += head1.val;
    head1 = head1.next;
  }
  if(head2 !== null) {
    value += head2.val;
    head2 = head2.next;
  }

  remainder = value > 9 ? 1 : 0;
  current.val = value % 10;

  current.next = linkedListAdding(head1, head2, remainder);

  return current;
}