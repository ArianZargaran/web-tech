/**
 * A recursive method is a method that calls itself.
 * Normally, what changes between a call and its inner call of itself, is the parameters we use to call it
 * 
 * In order to break the recurisivity we need to create a BASE CASE.
 * A BASE CASE is a CONDITION based on the imput to avoid the infinite loop, to stop the iterations.
 * 
 * We need to check the OUTPUT to understand how the code changes;
 */

/**
 * Ways to traverse a tree
 * 
 * In-order: We check the Left Node - Current - Right Node, in that order
 * Pre-order: We check the Current - Left Node - Right Node, in that order
 * Post-order: We check the Left Node - Right Node - Current, in that order
 */

const inOrderRecursiveTraverse = (node) => {
  if(node === null) {
    return;
  }

  inOrderRecursiveTraverse(node.left);
  console.log(node);
  inOrderRecursiveTraverse(node.right);
}

const preOrderRecursiveTraverse = (node) => {
  if(node === null) {
    return;
  }

  console.log(node);
  preOrderRecursiveTraverse(node.left);
  preOrderRecursiveTraverse(node.right);
}

const postOrderRecursiveTraverse = (node) => {
  if(node === null) {
    return;
  }

  postOrderRecursiveTraverse(node.left);
  postOrderRecursiveTraverse(node.right);
  console.log(node);
}