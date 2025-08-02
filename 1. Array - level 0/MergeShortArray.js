// https://leetcode.com/problems/merge-sorted-array/description/

var merge = function(nums1, m, nums2, n) {
    let p1=m-1;
    let p2=n-1;
    for(let i=m+n-1;i>=0;i--){
        if(p2<0){
            break;
        }
        if(p1>=0&& nums1[p1]>nums2[p2]){
            nums1[i]=nums1[p1--];
        } else {
            nums1[i]=nums2[p2--]
        }
    }
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]