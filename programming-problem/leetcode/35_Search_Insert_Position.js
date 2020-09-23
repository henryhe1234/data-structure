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

//binary search method
var searchInsert1 = function(nums, target) {
  let low = 0;
  let high = nums.length -1;
  while(low <= high){
      let mid = Math.floor((low+high)/2);
      if(nums[mid] === target){
          return mid;
      }else if(nums[mid] < target){//right part of the array
          low = mid +1;
      }else{
          high = mid -1;
      }
  }
  return low;
  
  
  
};