// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//Challenge: Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Example 1:
    // Input: [2,2,1]
    // Output: 1
// Example 2:
    // Input: [4,1,2,1,2]
    // Output: 4

var singleNumber = function(nums) {
    
    for (let i=0;i<nums.length;i++){
        let count=0
        for(let j=0;j<nums.length;j++){
            if (nums[j]===nums[i]){
                count++
            }
        }
        if (count===1){
            return nums[i]
        }
    }
    
};