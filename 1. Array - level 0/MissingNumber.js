// https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    let n= nums.length;
    let totalSum = (n*(n+1))/2;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }

    return totalSum - sum;
};

let nums = [3,0,1];
console.log(missingNumber(nums)); // Output: 2