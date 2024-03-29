// attempt to flatten arrays

const arr = [2, 5, [7, 9], 9 , 2, [9, 9, [3]]];

let flattenArray = (arr) => {

    let flat = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            flat.push(...flattenArray(arr[i]))
        } else {
            flat.push(arr[i]);
        }
    }

    return flat;
}

flattenArray(arr);
// console.log(flattenArray(arr));

//Without spread operator on line 12 
// [ 7, 9 ]
// [ 3 ]
// [ 9, 9, 3 ]
// [ 3 ]

// With spread operator on line 12
// 7 9
// 3
// 9 9 3
// 3