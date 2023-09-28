function transposeMatrix(matrix) {
  // Write your code here.
  let transposedMatrix = [];
  
  for (let i = 0; i < matrix.length; i++) {
    const currentLine = matrix[i];
    for (let j = 0; j < currentLine.length; j++) {
      if (i === 0) {
        transposedMatrix[j] = []
      }
      transposedMatrix[j][i] = currentLine[j];
    }
  }
  return transposedMatrix;
}

console.log(transposeMatrix([
  [5, 6, 3, -3, 12],
  [-3, 6, 5, 2, -1],
  [0, 0, 3, 12, 3]
]))

// [
//   [5, 6, 3, -3, 12],
//   [-3, 6, 5, 2, -1],
// ]

// [
//   [5, -3],
//   [6, 6],
//   [3, 5],
//   [-3, 2],
//   [12 -1],
// ]
