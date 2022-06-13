// * Reference: https://leetcode.com/problems/rotate-image/

/*
* /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */ 
/**
*    [
*      [1, 2, 3, 4, "a"],
*      [5, 6, 7, 8, "b"],
*      [9, 0, 1, 2, "c"],
*      [3, 4, 5, 6, "d"],
*      [2, 4, 4, 5, "e"]
*    ]
**/

function rotateImage(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    for(let col = row; col < matrix.length; col++) {
      [matrix[col][row], matrix[row][col]]=[matrix[row][col], matrix[col][row]];
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

/*
* Explanation: If you rotate a matrix through its diagonal axes \ first;
* then, reverse each of the arrays, is equal to rotating the matrix to the right. 
*/

console.log(
  rotateImage([
    [1, 2, 3, 4, "a"],
    [5, 6, 7, 8, "b"],
    [9, 0, 1, 2, "c"],
    [3, 4, 5, 6, "d"],
    [2, 4, 4, 5, "e"]
  ])
);