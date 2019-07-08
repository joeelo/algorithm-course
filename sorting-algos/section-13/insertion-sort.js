let testArray = [2, 9, 76, 4];
// The thing about insertion sort is we don't check the entire array;
// We check it backwards.
// That is to say if 


function insertionSort (arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j]
            j--;

        }
        arr[j + 1] = currentVal
    }
    console.log(arr);
    return arr;
}

insertionSort(testArray);