/**
 * Remove the node at a given index STARTING FROM THE END
 */

 const removeFromEndRecursive = (head, index) => {
  if (head === null) {
    return 0;
  }

  let i = removeFromEndRecursive(head.next, index) + 1;
  
  if (i === index) {
    console.log(head.val);
  }

  return i;
}

/**
 * Time complexity - O(n)
 * Space complexity - O(n)
 */

