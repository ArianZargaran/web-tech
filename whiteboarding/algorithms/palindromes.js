/**
/* Input: Dados dos strings
/* Algoritmo: Determinar si uno es una permutación del otro
/* Output: Booleano
**/

// Aproximacion 1
// Recorrer ambos strings.
// Almacenando los datos en arrays
// Sorting de cada una de ellas y transformar esos arrays de nuevo en strings
// La comparación de ambas strings te dice si son son iguales o no.


function stringPermutations(firstString, secondString) {
  if(firstString.length !== secondString.length) {
    return false;
  }
 
  const arr1 = firstString.toLowerCase().split("").sort().join("");
  const arr2 = secondString.toLowerCase().split("").sort().join("");
  
  return arr1 === arr2;
}

// Time Complexity: O(nlogn)
// Space Complexity: O(n)


// Aproximacion 2
// Hacer un hash map de caracteres para contar cuantos caracteres hay de cada uno.
// Al comparar los maps, descubrimos si los strings son permutaciones, el uno del otro.


function permutations(s1, s2) {
  let firstHash = {};
  let secondHash = {};
  
  for(let i = 0; i < s1.length; i++) {
    const char = s1[i].toLowerCase();
    
    if(firstHash[char]) {
      firstHash[char] = firstHash[char] + 1;
    } else {
      firstHash[char] = 1;
    }
  }
  
    for(let i = 0; i < s2.length; i++) {
    const char = s2[i].toLowerCase();
    
    if(secondHash[char]) {
      secondHash[char] = secondHash[char] + 1;
    } else {
      secondHash[char] = 1;
    }
  }
  
  return JSON.stringify(firstHash) === JSON.stringify(secondHash)
  
}

// Input: Dado un string
// Output: boolean
// Rutina: Determinar si es una permutacion de un palindromo

function palindrom(s1) {
  let hash = {};
  
  for(let i = 0; i < s1.length; i++) {
    const char = s1[i].toLowerCase();
    
    if(hash[char]) {
      hash[char] = hash[char] + 1;
    } else {
      hash[char] = 1;
    }
  }
  
  const check = Object.keys(hash);
  let oddNums = 0;
  
  for(let i = 0; i < check.length; i++) {
    if(hash[check[i]] % 2 !== 0) {
      oddNums++;
    }
  }
  
  return oddNums <= 1;
    
}

console.log(
  palindrom("Ana")
)