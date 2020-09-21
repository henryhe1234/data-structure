var twoSum = function(nums, target) {
  let obj = {};
  let answer = [];
  for(let i =0;i<nums.length;i++){
      if(obj[target - nums[i]] !== undefined){
          answer.push(obj[target-nums[i]]);
          answer.push(i);
          return answer;
      }
      obj[nums[i]] = i;
  }
  return answer;
};
twoSum([2,7,11,15],9)