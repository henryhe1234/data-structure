// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

//map version
var majorityElement = function(nums) {
  let obj = {};
  let time = 0;
  let target;
  for(let i = 0;i<nums.length;i++){
      if(obj[nums[i]] === undefined){
          obj[nums[i]] = 1;
      }else{
          obj[nums[i]]++;
      }
  }
  let keys = Object.keys(obj);
  for(let key of keys){
      if(obj[key] > time){
          time = obj[key];
          target = key;
      }
  }
  
  return target;
  
};
var majorityElement1 = function(nums) {
  let major =  nums[0];
  let count = 1;
  for(let i = 1;i<nums.length;i++){
      if(nums[i] === major){
        count++; 
      }else if(count === 0){
          major = nums[i];
          count++;
      }else{
          count--;
      }
  }
  
  return major;
};

