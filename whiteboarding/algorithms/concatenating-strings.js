/**
/* Input: Given two strings and an isSubstring helper method.
/* Algoritmo: metodo substring que chequea si una palabra es substring de otra.
/* Output: Booleano
/* Ejemplo: "waterbottle", "bottlewater" -> true
/* Ejemplo: "waterbottle", "terbottlewa" -> true
/* Ejemplo: "waterbottle", "terbotlewat" -> false
/* Ejemplo: "camaleon", "oncamale" -> true
/* Ejemplo: "camaleon", "ncamaleo" -> true
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