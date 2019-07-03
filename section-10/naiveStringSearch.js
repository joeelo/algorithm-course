// PSUEDOCODE 
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match break the outer loop
// If the charcters do match, keep going
// If you complete the inner loop and find a match increment the counter
// return the count of matches


let naiveSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++){
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length -1 ) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lolaijfiejfloajfelol", "lol"));






//My attempt
// let naiveString = (str, chars) => {
//     let matches = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === chars[0]) {
//             for (let j = 0; j < chars.length; j++) {
//                 if (str[i + j] !== chars[j]) {
//                     break;
//                 } else {
//                     matches++;
//                 }
//             }
//         }
//     }
//     return matches;
// }