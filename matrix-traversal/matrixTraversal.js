// @ts-nocheck
// This is my attempt at a solution. Going to check leetcode for verifiable solution 


(function() {
  const matrix = [
    [1, 3, 5, 9], 
    [4, 10, 6, 20], 
    [2, 8, 11, 16],
    [2, 7, 14, 22],
    [102, 6, 55, 32],
    [72, 45, 8, 19]
  ]

  if (!matrix) {
    return false 
  }

  const numsCheckedInMatrix = matrix[0].length * matrix.length 

  const rowLength = matrix[0].length
  const columnLength = matrix.length 

  let rowsToTraverse = matrix[0].length - 1
  let columnsToTraverse = matrix.length - 1

  let counter = 0
  let rowIndex = 0 
  let columnIndex = 0

  const values = []

  while (counter < numsCheckedInMatrix) {
    if (matrix[columnIndex]) {
      values.push(matrix[columnIndex][rowIndex])
    }

    if (columnIndex === columnsToTraverse && rowIndex + rowsToTraverse >= rowLength) {
      rowIndex -= 1
    }

    if (rowIndex === rowsToTraverse) {
      columnIndex += 1
    }

    if (rowIndex < rowsToTraverse && columnIndex !== columnsToTraverse) {
      rowIndex += 1
    }

    // if (columnIndex < columnsToTraverse && rowIndex === rowsToTraverse) {
    //   columnIndex += 1
    // }

    counter++ 
  }
  
  console.log(values)
  return values 
})()