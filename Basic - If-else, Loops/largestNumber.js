let arr = [2, -5, 6, -8, 28, 9, 8];

function largestNumber(arr) {
    let max = arr[0]; //-Infinity
    for (let i = 1; i < arr.length; i++){
        
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max ;
}
let large = largestNumber(arr)
console.log(large)