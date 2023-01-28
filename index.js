/**
 * Get the biggest path in a matrix
 */
const { readFileSync } = require("fs");
const inputFile = "input.txt";

//--------------------------------------------------------------//
/**
 * Get input from txt file
 */
const contents = readFileSync(inputFile, "utf-8");
const contentArr = contents.split(/\r?\n/);

//Number of rows and columns
let N = contentArr[0].split(" ")[0];
let M = contentArr[0].split(" ")[1];

let matrix = new Array(N);
for (let i = 0; i < N; i++) {
  matrix[i] = contentArr[i+1].split(" ").map(Number);;
}
//--------------------------------------------------------------//

console.table(matrix);
let totalSize = 1;

/**
 * 
 * @param {index of row in the matrix} row 
 * @param {index of column in the matrix} col 
 * @param {current biggest path size} max 
 */
function recursion(row, col, max) {
  //traverse to the right
  if (col + 1 < M) {
    if (matrix[row][col + 1] > matrix[row][col]) {
      recursion(row, col + 1, max + 1);
    } else {
      recursion(row, col + 1, 1);
    }
  }

  //traverse to the bottom
  if (row + 1 < N) {
    if (matrix[row + 1][col] > matrix[row][col]) {
      recursion(row + 1, col, max + 1);
    } else {
      recursion(row + 1, col, 1);
    }
  }
  totalSize = max > totalSize ? max : totalSize;
}

recursion(0, 0, 1);

console.log("The biggest path has total size of " + totalSize);
