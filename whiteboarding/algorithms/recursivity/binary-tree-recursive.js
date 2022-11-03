// We receive a Binary Tree.
// We want to return an array of LLs. Each LL has one level of the binary tree.

//          4
//     5         6
//   8   2          1
// 1   

// [4]
// [5 -> 6]
// [8 -> 2 -> $ -> 1]
// [1 -> $ -> $ -> $ -> $ -> $]

// const arr = ['head1', 'head2', 'head3'];
// node.val = node (R-L)
// node.next = node (R-L)


function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

// function RootNode(val) {
//   this.val = val;
//   this.left = left;
//   this.right = right;
// }

const binaryTreesLinkedListRecursive = (root, finalArr = [], level = 0) => {

  if(root === null) {
    if(!!finalArr[level]) {
      const levelArr = finalArr[level];
  
      finalArr[level] = [...levelArr, new Node("$")];
    } else {
      finalArr.push([ new Node("$") ])
    }
  }

  // If the arr within the finalArr exists
  if(!!finalArr[level]) {
    const levelArr = finalArr[level];

    finalArr[level] = [...levelArr, new Node(root.val)];
  } else {
    finalArr.push([ new Node(root.val) ])
  }

  binaryTreeLinedListRecursive(root.left, finalArr, level + 1);
  binaryTreeLinedListRecursive(root.right, finalArr, level + 1);

  return finalArr;
}