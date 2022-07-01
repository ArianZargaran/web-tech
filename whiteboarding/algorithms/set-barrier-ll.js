/**
 * Given a Linked List and a value;
 * All nodes with a greater or equal value need to be moved to the end of the LL;
 * All nodes with a smaller value need to be placed to the begining of the LL;
 */

const sendGreaterValuesToTheEnd = (head, value) => {
  if (head === null) {
    return head;
  }

  let lessLL = new Node();
  let greaterLL = new Node();
  let lessHead = lessLL;
  let greaterHead = greaterLL;

  let current = head;

  while(current !== null) {
    if(current.val >= value) {
      greaterLL.next = current;
      greaterLL = greaterLL.next;
      greaterLL.next = null;
    } else {
      lessLL.next = current;
      lessLL = lessLL.next;
    }

    current = current.next;
  }
  
  lessLL.next = greaterHead.next;


  return lessHead.next;
}