// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
var thirdMax = function(nums) {
  let max1 = null;
  let max2 = null;
  let max3 = null;
  for(let num of nums){
      if(num === max1 || num === max2 || num === max3) continue;
      if(max1 === null || num > max1){
          max3 = max2;
          max2 = max1;
          max1 = num;
      }else if (max2 === null || num > max2){
          max3 = max2;
          max2 = num;
      }else if (max3 === null || num > max3){
          max3 = num;
      }
  }
  return max3 === null? max1 : max3;
  
  
};