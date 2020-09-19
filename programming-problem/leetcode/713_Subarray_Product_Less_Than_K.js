var numSubarrayProductLessThanK = function(nums, k) {
  if(k <=1) return 0;
  let count = 0;
  let product = 1;
  for(let i =0,j = 0;j < nums.length;j++){
      product *= nums[j];
      
      while(i<=j && product >= k){
          product /= nums[i++];
      }
      count += j-i+1;
  }
  return count;
};

