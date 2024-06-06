// @ts-nocheck

(function() {
  const matrix = [
    [1, 3, 5, 9], 
    [4, 10, 6, 20], 
    [2, 8, 11, 16],
    [2, 7, 14, 22],
    [102, 6, 55, 32],
    [72, 45, 8, 19]
  ]


  let left = 0 
  let top = 0 
  let right = matrix[0].length - 1 
  let bottom = matrix.length - 1 

  const matrixSize = matrix[0].length * matrix.length 
  const nums = []

  while (nums.length < matrixSize) {
    for (let i = left; i <= right && nums.length < matrixSize; i++) {
      nums.push(matrix[top][i])
    } // Went throught the entire top, exclude it from the search array 
    top++ 

    for (let i = top; i <= bottom && nums.length < matrixSize; i++) {
      nums.push(matrix[i][right])
    }
    right--

    for (let i = right; i >= left && nums.length < matrixSize; i--) {
      nums.push(matrix[bottom][i])
    }
    bottom--
    
    for (let i = bottom; i >= top && nums.length < matrixSize; i--) {
      nums.push(matrix[i][left])
    }
    left++ 
  }

  console.log(nums)
  return nums 
})()