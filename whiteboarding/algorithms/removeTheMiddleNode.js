/*
* Info:
*  -- The given node is not the head.
*  -- The given node is not the tail.
* Routine:
*  -- The given node must disapear from the LL.
* Example:
*  -- Given Node(3) for the following LL: 1 -> 2 -> 3 -> 4 -> 5
*  -- Returns: 1 -> 2 -> 4 -> 5
**/

function removeTheMiddleNode (node) {
  let current = node;
  while(current !== null) {
    if (current.next === null) {
      current = null;
      return;
    }

    current.val = current.next.val;

    current = current.next;
  }
}

//  1 -> 2 -> 3 -> 4 -> 5 -> null
//  1 -> 2 -> 4 -> 4 -> 5 -> null
//  1 -> 2 -> 4 -> 5 -> 5 -> null
//  1 -> 2 -> 4 -> 5 -> null

function removeTheMiddleNode2 (node) {
  let remaining = node.next;
  node.val = remaining.val;
  node.next = remaining.next;
}