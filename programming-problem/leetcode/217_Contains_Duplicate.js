// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

var containsDuplicate = function(nums) {
  if(!nums || nums.length === 1){
      return false;
  }
  nums.sort((a,b)=>a-b);
  for(let i = 0;i<nums.length;i++){
      if(nums[i] === nums[i+1]){
          return true;
      }
  }
  return false;
};