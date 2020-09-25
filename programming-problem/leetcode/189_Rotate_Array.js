
var rotate = function(nums, k) {
  for(let i = 0;i<k%nums.length;i++){
      let last = nums[nums.length-1];
      for(let j = nums.length -1 ;j>=0;j--){
          if(j !== 0){
            nums[j] = nums[j-1];
          }else{
            nums[j] = last;

          }
          
      }
      console.log(nums);
  }
  
};

//clever edition
var rotate1 = function(nums, k) {
  k %= nums.length;
  if (k !== 0) [].push.apply(nums, nums.splice(0, nums.length - k));
  // if (k !== 0) [].push.apply(nums.splice(0,nums.length - k),nums);
  
};
rotate([1,2,3,4,5,6,7],3);