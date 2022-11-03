/*
* Check if a tree is balanced.
* Balance means the difference between its branches (right and left) levels is <= 1
*/

//         4
//     5       6
//   8             0
// 1   

const checkHeight = (root) => {
  // Base case
  if(root === null) {
    return -1;
  }

  let leftCounter = balancedTreeCheck(root.left);

  if(leftCounter === -Number.MAX_VALUE) {
    return -Number.MAX_VALUE;
  }

  let rightCounter = balancedTreeCheck(root.right);

  if(rightCounter === -Number.MAX_VALUE) {
    return -Number.MAX_VALUE;
  }

  let max = Math.max(leftCounter, rightCounter);
  let min = max === leftCounter ? rightCounter : leftCounter;

  if(max - min > 1) {
    return -Number.MAX_VALUE;
  }

  return max + 1;
}

const isTreeBalanced = (root) => {
  return checkHeight(root) !== -Number.MAX_VALUE;
}