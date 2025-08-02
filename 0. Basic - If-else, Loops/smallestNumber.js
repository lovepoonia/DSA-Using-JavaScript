let arr = [-2, -5, -6, -8, -28, -9, -8];

function smallestNo(arr) {
    let min = arr[0];//Infinity
    for (let i = 1; i < arr.length; i++){
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min ;
}
let index = smallestNo(arr)
console.log(index)