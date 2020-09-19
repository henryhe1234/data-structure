var numIdenticalPairs = function(nums) {
  let count = 0;
  
  for(let i = 0; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j++) {
          if(nums[i] == nums[j]) {
              count++;
          }
      }
  }
  
  return count
};

var numIdenticalPairs1 = function(nums) {//O(n) using maps
  let obj = {};
  let answer = 0;
  for(let num of nums){
      if(!obj[num]){
          obj[num] = 1;
      }else{
          obj[num] += 1;
      }
  }
  for(let key in obj){
      answer += obj[key] * (obj[key] -1) /2;
  }
  return answer;
  
};
// numIdenticalPairs([1,1,1,1]);