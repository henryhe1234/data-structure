// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Input: [1,3,5,6], 5
// Output: 2

var searchInsert = function(nums, target) {
  for(let i =0;i<nums.length;i++){
      if(nums[i] === target){
          return i;
      }else if(nums[i] < target){
          while(nums[i] < target){
              i++;
          }
          return i;
      }else if(nums[i] > target){
          return 0;
      }
      
  }
  
  
  
};