// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.




var findLHS = function(nums) {
  let map = {};
  let max = 0;
  for(const num of nums){
      map[num] === undefined ? map[num] = 1 : map[num]+=1;
      if(num -1 in map)
          max = Math.max(max,map[num] + map[num - 1]);
      if(num + 1 in map){
          max = Math.max(max,map[num] + map[num + 1]);
      }
  }
    
  
  return max;
};


console.log(findLHS([1,3,2,2,5,2,3,7]));