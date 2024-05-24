(function() {
  const matrix = [
    [2, 0 , 5, 3], 
    [1, 8, 2, 4], 
    [9, 2, 4, 5], 
    [0, 7, 18, 72]
  ]

  let rowLength = matrix[0].length 
  let columnLength = matrix.length 

  for (let i = 0; i < columnLength; i++) {
    let containsZero = false
    let rowIndex = -1

    for (let j = 0; j < rowLength; j++) {
      if (matrix[i][j] === 0) {
        containsZero = true 
        rowIndex = j
      }
    }

    if (containsZero) {
      for (let k = 0; k < rowLength; k++) {
        matrix[i][k] = 0
      }

      for (let c = 0; c < columnLength; c++) {
        console.log(matrix[c][rowIndex])
        // console.log(matrix[c][rowIndex] = 0)
      }
    }

    containsZero = false 
    rowIndex = -1 
  }

  console.log(matrix)

})()