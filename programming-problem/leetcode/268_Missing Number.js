// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// var missingNumber = function(nums) {
    
//     nums.sort((a,b)=>a-b);

//     for(let i = 0;i<nums.length;i++){
//         if(i !== nums[i]){
//             return i;
//         }
//     }
//     return nums.length;
// };

var missingNumber = function(nums) {
  let array = new Array(nums.length +1).fill(-1);
  for(const num of nums){
      array[num] = num;
  }
  return array.indexOf(-1);
};