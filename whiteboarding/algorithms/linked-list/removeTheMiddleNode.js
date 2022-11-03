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

// Logic: What to do with a LL of just one node?
// Logic: What would we do if the LL has just two nodes or none?

function removeTheMiddleNode2 (node) {
  // Instanciate two pointers; slow and fast;
  // traverse the LL until the Fast Pointer === null;
  // slowPointer.next === slowPointer.next.next;
  if(node === null) {
    return;
  }

  let slowPointer = node;
  let fastPointer = node.next;

  // Return 'undefined' if the LL has just one or two nodes
  if(slowPointer.next === null || fastPointer.next === null) {
    return;
  }

  while(fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  // Just doable if the LL has more than 
  slowPointer.next = slowPointer.next.next;
}