const arr1 = [2, 1, 4, 10, 9, 3 ];

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false 
            }
        }
        if (noSwaps) break;
    }
    console.log(arr);
    return arr;
}

bubbleSort(arr1);

// The difference between bubble and selection sort is the bubble moves all larger variables upward
// it does not compare each just one to the next and if it is larger then SWAP;