// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
  if(nums === null || nums.length === 0)
      return;
  
  let replacePosition = 0;
  for(let num of nums){
      if(num !== 0) nums[replacePosition++] = num;
  }
  while(replacePosition < nums.length)
      nums[replacePosition++] = 0
  
};
