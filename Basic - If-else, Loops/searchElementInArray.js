let arr = [2, 8, 9, 7, 28, 9.8];

function arrSearch(arr, search) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == search) {
            return i;
        }
    }
    return -1;
}
let index = arrSearch(arr, 28)
console.log(index)