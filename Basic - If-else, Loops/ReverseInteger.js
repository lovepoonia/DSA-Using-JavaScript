function reverseInteger (num){
    let numCopy = num;
    num = Math.abs(num);
    let rev = 0;

    while(num>0){
        let remainder = num % 10;
        rev = (rev * 10) + remainder;
        num = Math.floor(num / 10);
    }

    let limit = 2**31;
    if(rev < -limit || rev > limit) return 0;

    return numCopy < 0 ? -rev : rev;
}

let num = -123;
console.log(reverseInteger(num));