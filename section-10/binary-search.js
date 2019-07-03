// This function accepts a sorted array and a value
// Create a left pointer at the start of the array and a right pointer at the end of the array
// While the left pointer comes before the right pointer 
    //  Create a pointer value for the middle
    // If you find the value you want return the value
    // If the value is too small, move the left pointer up.
    // If the value is too large, move the right pointer down.
// If you never find the value return -1

// Write a function called binary search that takes an array and value and returns the index at which that value exists, Otherwise return -1

const firstArray = [2, 5, 8, 9, 11, 15, 17];
const secondArray = [3, 6, 7, 8, 38, 90];


function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1 ;
    let middle = (start + end) / 2;

    while(arr[middle] !== value && start <= end) {
        if (value < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === value ? middle : -1 ;
}

console.log(binarySearch(firstArray, 22));
