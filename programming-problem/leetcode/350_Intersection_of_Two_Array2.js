// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
var intersect = function(nums1, nums2) {
  let array = [];
  let map = {};
  for(let n of nums1){
      map[n] === undefined ? map[n] = 1 : map[n]++;
  }
  for(let n of nums2){
      if(map[n] > 0){
          array.push(n);
          map[n]--;
      }
  }
  return array;
};