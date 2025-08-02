// https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function(nums) {
    let currCount=0;
    let maxCount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            currCount++
        }
        else{
            maxCount= Math.max(currCount,maxCount);
            currCount=0;
        }
    }
        return Math.max(currCount,maxCount);
};

let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 3
   