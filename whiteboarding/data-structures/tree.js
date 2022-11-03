// class Node {
//   constructor(data, right, left) {
//     this.right = right;
//     this.left = left;
//     this.data = data;
//   }
// }

class Node {
  constructor(data) {
    this.children = [];
    this.data = data;
  }
}

const Root = new Node(1);
Root.children[1] = new Node(2); // Node.children = [undefined, Node(2)]
Root.children[2] = new Node(3); // Node.children = [undefined, Node(2), Node(3)]
Root.children[5] = new Node(6); // Node.children = [undefined, Node(2), Node(3), undefined, undefined, Node(6)]

class Tree {
  constructor(root) {
    this.root = root;
  }
}