/**
 * Info: https://leetcode.com/problems/set-matrix-zeroes/submissions/
 * The approach for this challenge would be to instanciate a `rows` and `cols` variable to:
 * * First, track what cols and rows should be converted to Zeros.
 * row = [false, true, true];
 * col = [true, false, false, false];
 * * Second, transform every element that shares the rows' or cols' initially stored in the rows & cols trackers 
 */

var setZeroes = function(matrix) {
  let rows = new Array(matrix.length).fill(false);
  let cols = new Array(matrix[0].length).fill(false);
  
  for(let row = 0; row < matrix.length; row++) {
    if(!matrix[row].every((element, index) => {
      if(element === 0) {
        cols[index] = true;
      }
      return !!element
    })) {
      rows[row] = true;
    }
  }

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(cols[col] || cols[row]) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1]
  ])
);