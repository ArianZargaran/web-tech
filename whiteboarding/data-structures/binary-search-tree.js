/**
 * Algorithm that given an integers array, create a Binary Search Tree
 * Specs: Minimum Height possible
 */

class Node {
  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

const buildBinarySearchTree = (sortedArr) => {
  const recursiveIteration = (lowerBoundry, upperBoundry, arr) => {
    if(lowerBoundry > upperBoundry) { return null }
  
    const findMiddle = Math.floor((upperBoundry + lowerBoundry)/2);
    const current = new Node(arr[findMiddle]);
    current.left = recursiveIteration(lowerBoundry, findMiddle - 1, arr)
    current.right = recursiveIteration(findMiddle + 1, upperBoundry, arr);
  
    return current;
  }

  return recursiveIteration(0, sortedArr.length - 1, sortedArr);
}

// [1, 3, 6, 10]
//      r - 3
// l- 1       r- 6
//                l-10

// [1, 3, 6, 10, 22, 37, 68]
// root - 10
//   l3         r37
// l1 r6     l22   r68

// [1, 3, 6, 10, 22, 37]
// root -  6
//   l3         r22
// l1        l10   r37