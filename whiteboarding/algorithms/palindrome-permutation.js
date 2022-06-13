
// Input: Given a string
// Output: boolean
// Routine: Determine if it is a palindrom permutation

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