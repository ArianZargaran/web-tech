/**
/* Input: Given two strings
/* Algorithm: Determine if anyone is a permutation of the the other 
/* Output: Boolean
**/

// Aproach #1
// Traverse both strings.
// Storing each char in an array.
// Sort each of them and transform those arrays back into strings.
// Compare both strings to check if they are permutations.


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


// Aproach #2
// Build a hash map of chars to count how many chars are there of each type
// When comparing maps, you get that both strings have the same num of chars and the same number of each char


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
