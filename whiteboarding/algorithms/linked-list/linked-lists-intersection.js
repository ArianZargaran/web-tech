/**
 * Description: Given two lists, check if there's an intersation in between both of them.
 * If there is an intersaction, return the node where the intersection is encountered.
 * 
 * Every node has a unique value;
 * To compare, we can just check both nodes values, that's all.
 *
 * Pag 234 Cracking the Coding interview
 */

const getLinkedListLength = (head) => {
  let count = 0;
  if(head === null) {
    return { count, lastNode: head }
  }
  let current = new Node();

  while(current.next !== null) {
    count++;
    current = current.next;
  }

  return { count, lastNode: current };
}

const getShortestList = ({ head1, head2, firstListLength, secondListLength }) => {
  let shortestList = head1;
  let greatestList = head2;
  
  if (secondListLength < firstListLength) {
    shortestList = head2;
    greatestList = head1;
  }

  return [shortestList, greatestList];
}

const getLengthsDiff = ({ firstListLength, secondListLength }) =>  Math.max(firstListLength - secondListLength, secondListLength - firstListLength);

function linkedListsIntersection(head1, head2) {
  // Check both LL lengths
  const { tail: firstListTail, count: firstListLength } = getLinkedListLength(head1);
  const { tail: secondListTail, count: secondListLength } = getLinkedListLength(head2);
  
  // Comprobar que el ultimo nodo es compartido.
  if(firstListTail.val !== secondListTail.val) {
    // -- Si - el nodo no es compartido: devolver null;
    return null;
  }
  // -- Si - el nodo es compartido:
  // 1. Almacenar la diferencia entre las longitudes.
  // const array = getShortestList({ head1, head2, firstListLength, secondListLength });
  // const shortestList = array[0];
  // const greatestList = array[1];
  const [shortestList, greatestList] = getShortestList({ head1, head2, firstListLength, secondListLength });
  let lengthsDiff = getLengthsDiff({ firstListLength, secondListLength });

  // 2. Avanzar con un nuevo puntero sobre la lista mas larga el numero de nodos igual a la diferencia entre las longitud
  while(lengthsDiff !== 0) {
    lengthsDiff--;
    greatestList = greatestList.next;
  }

  // 3. A partir de este punto, simplemente ir comprobando nodo a nodo por las dos listas hasta encontrar el primero que coincida en valores
  while(shortestList !== null) {
    if(shortestList.val === greatestList.val) {
      // 4. Devolver el nodo de intersección
      return shortestList;
    }
    
    shortestList = shortestList.next;
    greatestList = greatestList.next;
  }
  
  // return null
  return null;
}