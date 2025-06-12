function palindromeNo (num){
    if(num < 0){
        return false;
    }
    let numCopy = num;
    let rev = 0;

    while(num>0){
        let remainder = num % 10;
        rev = (rev * 10) + remainder;
        num = Math.floor(num / 10);
    }

    return numCopy == rev ? true : false;
}
let num = 121
palindromeNo(num) == true ? console.log("Number is Palindrome") : console.log("Number is not Palindrome");