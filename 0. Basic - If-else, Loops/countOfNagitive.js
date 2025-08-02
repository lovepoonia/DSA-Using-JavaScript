let arr = [2, -5, 6, -8, -3, 9, 8];

function countNagitive(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        
        if (arr[i] < 0) {
            count++; 
        }
    }
    return count;
}
let count = countNagitive(arr)
console.log(count)