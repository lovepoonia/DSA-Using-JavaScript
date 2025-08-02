// https://leetcode.com/problems/reverse-string/description/

var reverseString = function(s) {
    let x = s.length;
    let len = Math.floor(x/2);
    for(let i = 0;i<len; i++){
        let temp = s[i];
        s[i] = s[x-1-i];
        s[x-1-i] = temp;
    }
};

let s = ["h","e","l","l","o"];
reverseString(s);
console.log(s); // Output: ["o","l","l","e","h"]