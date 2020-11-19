// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

var climbStairs = function(n) {
  if(n<=0) return 0;
  if(n===1)return 1;
  if(n===2)return 2;
  
  let one_step_before = 2;
  let two_step_before = 1;
  let all_steps = 0;
  
  for(let i = 2;i<n;i++){
      all_steps = one_step_before + two_step_before;
      two_step_before = one_step_before;
      one_step_before = all_steps
  }
      return all_steps;
  
};