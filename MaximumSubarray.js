// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example:
    // Input: [-2,1,-3,4,-1,2,1,-5,4],
    // Output: 6
    // Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let varx=0 //set an iterative variable
    let varMax= Number.NEGATIVE_INFINITY //set a max variable
    //Loop through array of numbers 
    for (i=0;i<nums.length;i++){
        //iterative variable will take max of current iteration or sum index to previous iteration
        varx=Math.max(nums[i],varx+nums[i])
        //Compare iterative variable to set max variable and change if new max found
        if(varx>varMax){
            varMax=varx
        }   
    }
    //return max from for loop
    return varMax
};