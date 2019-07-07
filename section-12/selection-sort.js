// ----------- SELECTION SORT PSUEDOCODE ---------------// 
// 1) Store the first element as the smallest element you've seen so far.
// 2) Compare this number to the next item in the array until you find a smaller number.
// 3) If a smaller number is found, designate that smaller number to be the new "minumum" and continue until the end of the array
    // Note - we are not swapping values, we are swapping indexes, if index 3 is smaller than index 1 than index three becomes 1.
// 4) Repeat this with the next element until the array is sorted. 
    // Note - We don't start from the end after the first pass we start from the item that was just sorted if there were any.

// CODE! 

const arr1 = [2, 1, 4, 10, 9, 3 ];

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    console.log(arr);
    return arr;
}

selectionSort(arr1);
