function countOfNumber(num) {
    if(num == 0){
        return 1;
    }

    let count = 0;
    num = Math.abs(num)
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

let totalNo = countOfNumber(-258963);
// let totalNo = countOfNumber(258963)
// let totalNo = countOfNumber(0)
console.log(totalNo);
