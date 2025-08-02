let arr = [-2, -5, -6, -8, -2, -9, -8];
// let arr = [10]

function secondLargestNo(arr) {
    if(arr.length < 2){
        return null;
    }
    let firstLargest = -Infinity; 
    let secondLargest = -Infinity; 
    for (let i = 1; i < arr.length; i++){    
        if (arr[i]>firstLargest ) {
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && firstLargest !== arr[i]) {
            secondLargest = arr[i]
        }
    }
    return secondLargest ;
}
let sln = secondLargestNo(arr)
console.log(sln)