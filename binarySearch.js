const arr = [1, 3, 9, 21, 92, 102, 529]

function binarySearch(number) {
  let start = 0 
  let end = arr.length - 1

  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    const currNum = arr[middle]

    if (currNum === number) {
      return currNum 
    }

    if (number > currNum) {
      start = middle + 1
    }

    if (number < currNum) {
      end = middle - 1
    }
  }

  return -1
}