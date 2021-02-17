var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let start = 0;
  for(let i = 0;i<nums.length;i++){
      if(nums[i] === 0){
          start = i+1;
      }else{
          count = Math.max(count,i-start+1);
      }
  }
  return count;
};