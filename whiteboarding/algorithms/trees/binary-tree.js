// We receive a Binary Tree.
// We want to return an array of LLs. Each LL has one level of the binary tree.

//          4
//     5         6
//   8   2          1
// 1   

// 4
// 5 -> 6
// 8 -> 2 -> $ -> 1
// 1 -> $ -> $ -> $ -> $ -> $

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

const binaryTreesLinkedList = (root) => {
  // Checkeamos si el root es null
  // -- Si es null, devolvemos un array con un nodo, cuyo valor es $ y se acaba la rutina.
  if (root === null) {
    const result = new Node("$");
    return [result];
  }

  // Inicializar una LL sobre la que vamos a hacer un traverse siempre que tenga nodos. El primero de los casos es con el nodo root
  let traverseLL = new Node(root);
  // Inicializar el arr del return;
  let result = []; 

  // Hacemos el bucle while en base a la condición de que esa LL esté vacía
  while(traverseLL !== null) {
    // - Copiar la LL traverse y llamarla 'parent'
    let parent = traverseLL;
    // - Añadir la LL del 'parent' al arr del return
    result.push(parent);
    // - Vaciar la LL del traverse
    traverseLL = new Node();
    // - Hacer un bucle que recorra la parent LL
    let dummy = traverseLL;
    while(parent !== null) {
      // -- Ir añadiendo los R-L nodes de los nodos en la parentLL a la traverseLL
      dummy.next = new Node(parent?.val?.right || "$");
      dummy = dummy.next;
      dummy.next = new Node(parent?.val?.left || "$");
      dummy = dummy.next;

      parent = parent.next;
    }

    traverseLL = traverseLL.next;
  }

  // Devolver el arr del return;
  return result;
}