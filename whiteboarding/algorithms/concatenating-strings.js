/**
/* Input: Given two strings and an isSubstring helper method.
/* Routine: A given substring method checks if a word is a substring of the other.
/* Output: Boolean
/* Example: "waterbottle", "bottlewater" -> true
/* Example: "waterbottle", "terbottlewa" -> true
/* Example: "waterbottle", "terbotlewat" -> false
/* Example: "camaleon", "oncamale" -> true
/* Example: "camaleon", "ncamaleo" -> true
**/

/**
 * Base case.
 * Check if the strings have the same num of chars. If not, return false;  
 **/  
 
// camaleon = on + camale
// x = camale
// y = on
// camaleon = x+y
// oncamale = y+x
// camaleoncamaleon === xyxy

// waterbottle = wa + terbottle
// x = wa
// y = terbottle
// waterbottle = x+y
// terbottlewa = y+x
// waterbottlewaterbottle === xyxy

function isRotation(s1, s2) {
  if(s1.length !== s2.length) { return false; }
  
  const finalString = s1+s1;
  
  return isSubstring(finalString, s2);
}