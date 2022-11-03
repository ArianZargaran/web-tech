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

function linkedListAdding(head1, head2) {
  if(head1 === null) {
    return head2;
  }

  if(head2 === null) {
    return head1;
  }

  let pointerLL1 = head1;
  let pointerLL2 = head2;
  let traverserLL = new Node();
  let dummy = new Node();
  dummy.next = traverserLL;
  let remainder = 0;

  while(pointerLL1 !== null || pointerLL2 !== null) {
    let value = remainder;
    if (pointerLL1 !== null) {
      value += pointerLL1.val;
      pointerLL1 = pointerLL1.next;
    }
    if(pointerLL2 !== null) {
      value += pointerLL2.val;
      pointerLL2 = pointerLL2.next;
    }

    if(value > 9) {
      remainder = 1;
      value = value % 10;
    } else {
      remainder = 0;
    }

    let current = new Node(value);
    traverserLL.next = current;
    traverserLL = traverserLL.next;
  }

  if (remainder) {
    traverserLL.next = new Node(remainder);
  }

  return dummy.next;
}