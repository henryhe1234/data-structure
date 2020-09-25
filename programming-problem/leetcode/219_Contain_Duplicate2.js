// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
var containsNearbyDuplicate = function(nums, k) {
  let obj={};
  for(let i =0;i<nums.length;i++){
      if(obj[nums[i]] === undefined){
          obj[nums[i]] = i;
      }else{
          if(i-obj[nums[i]] <= k){
              return true;
          }
          obj[nums[i]] = i;
      }
      
  }
  return false;
};