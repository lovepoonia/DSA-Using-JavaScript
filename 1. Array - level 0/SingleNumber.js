// https://leetcode.com/problems/single-number/description/

// approach: Using Brute Force(hash Set method)

function singleNumber(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
     for (let i=0; i<nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
    }
}

let nums = [4, 4, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 1

// approach: Using XOR method

function singleNumber2(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

let nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber2(nums2)); // Output: 4
