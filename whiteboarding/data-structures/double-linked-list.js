/**
 * 1. Create Node with two pointers
 * 2. Create Linked List with the following methods:
 * - Insert
 * - Delete
 * - Access
 *  + Access an element given its position
 * - Search
 *  + Access an element given its value
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

/**
 * By default, a Linked List comes with an empty node if no nodes are provided. 
 */
class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insert(index, val) {
    /**
     * La LL está vacía
     * -- Actualizamos el head y le añadimos el nuevo nodo  ✅
     * 
     * El index === 0
     * -- el nuevo nodo apunta con el right pointer al post (ex-this.head)  ✅
     * -- ex-this.head apunta al nuevo nodo con su left pointer
     * -- this.head pasa a ser el nuevo nodo.
     * 
     * Base: El index está entre el primer nodo (no null) y el ultimo nodo (que no es null)  ✅
     * -- recorrer el LL
     * -- tomar el nodo prev y apuntar al nuevo nodo con el right pointer
     * -- crear un nodo nuevo con el valor que recibimos apuntando a right (prev) y left (post) 
     * -- ir al post y apuntar al nuevo nodo con el left pointer
     * 
     * El index coincide con el ultimo nodo + 1  ✅
     * -- Accedemos al ultimo nodo de la LL y apuntamos con el right pointer al nuevo nodo
     * -- el nuevo nodo apunta con el left pointer al antiguo ultimo nodo
     * 
     * Si el indice es superior al LL.length  ✅
     * -- devolver false;
     */
    let node = new Node(val);

    if(this.head === null) {
      this.head = node;
      return true;
    }
  
    let current = this.head;

    if(index === 0) {
      node.right = current;
      current.left = node;
      this.head = node;
      return true;
    }

    while(current.right !== null) {
      if(index === 1) {
        let post = current.right.right;
        current.right = node;
        if(post !== null) {
          post.left = node;
        }
        node.left = current;
        node.right = post;

        return true;
      }

      index--;
      current = current.right;
    }
    
    if(index === 1) {
      current.right = node;
      node.left = current;
      return true;
    }
    
    return false;
  }

  delete(index) {
    /**
     * Si el head es null ✅
     *  - return false O throw exception ✅
     * Si el head NO es null ✅
     * -- Si eliminamos el primer nodo ✅
     * -- Si vaciamos la LL ✅
     * 
     * -- Base case: Si el index está entre el primer nodo y el ultimo  ✅
     * 
     * -- Si eliminamos el ultimo nodo ✅
     *
     * -- Si el index es superior al length del linked list
     *  - return false O throw exception ✅
     */
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    if(index === 0) {
      if(current.right === null) {
        this.head = null;
        return true;
      }
      current.right.left = null;
      this.head = current.right;
    }

    while(current.right !== null) {
      let post = current.right.right;

      if(index === 1) {
        current.right = post;
        if(post === null) {
          return true;
        }

        post.left = current;
        return true;
      }

      current = current.right;
      index--;
    }

    return false;
  }

  // return the node OR the value of that node;
  access(index) {
    let current = this.head;
    
    while(current !== null) {
      if(index === 0) {
        return current;
      }
      
      current = current.right;
      index--;
    }

    // When the given index > LL.length
    return false;
  }

  // return the node OR true if exists;
  search(value) {
    // Base case: When the value is somewhere in between the LL
    let current = this.head;
    
    while(current !== null) {
      if(current.value === value) {
        return true;
      }
      
      current = current.right;
    }

    // When the given index > LL.length
    return false;
  }
}


let tryDLL = new DoubleLinkedList();

// console.log(
//   tryDLL.insert(0, 1); // [0]
//   tryDLL.insert(1, 1); // [0, 1]
//   tryDLL.insert(2, 2); // [0, 1, 2]
//   tryDLL.insert(3, 3); // [0, 1, 2, 3]
//   tryDLL.delete(0); // [1, 2, 3]
//   tryDLL.delete(0); // [2, 3]
//   tryDLL.insert(1, 4); // [2, 3]
//   tryDLL.insert(1, 2); // [2, 3]
//   tryDLL.insert(0, 0); // [0, 2, 3]
// )

