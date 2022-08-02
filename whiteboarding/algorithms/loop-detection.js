/*
 * Tenemos una lista y queremos comprobar si esta tiene un bucle en su interior.
 * Queremos devolver el primer nodo del bucle. 
 * 
 * Approach
 * Usando la técnica del slow-runner/fast-runner, arrancamos un traverse de la lista por un nodo dummy.
 * La logica nos dice que si el slow-runner y el fast-runner se encuentran en algún punto; El loop existe porque el fast-runner habría "doblado" al slow runner.
 * En ese caso, setearíamos el slow-runner de nuevo al punto de inicio y el fast-runner pasaría a moverse a una velocidad de 1 nodo cada iteración.
 * Volvemos a comprar nodo a nodo y en el primero en el que sus valores coicidan, deberiamos devolver ese mismo nodo porque es el primero del bucle.
**/

const findFirstLoopNode = ({ slowPointer, fastPointer, head }) => {
  fastPointer = head;

  while(fastPointer.val !== slowPointer.val) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
}

function loopDetection(head) {
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if(fastPointer.val === slowPointer.val) {
      return findFirstLoopNode({ fastPointer, slowPointer, head })
    }
  }

  return null;
}