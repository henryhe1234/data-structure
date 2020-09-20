var shuffle = function(nums, n) {
  let array = [];
  for(let i = 0,j = n;i<n;i++,j++){
      array.push(nums[i],nums[j]);
  }
  return array;
};