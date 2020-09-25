// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function(n) {
    
  let obj={};
  while(!obj[n]){
      obj[n] = 1;
      let sum = 0;
      while(n > 0){
          let temp = n % 10;
          sum += temp * temp;
          n  = ~~(n/10);
      }
      if(sum === 1){
          return true;
      }
      n = sum;
  }
  return false;
  
};
//floyd Cycle
var isHappy1 = function(n) {
    
  let slow, fast;
  slow = fast = n;
  do {
      slow = digitSquareSum(slow);
      fast = digitSquareSum(fast);
      fast = digitSquareSum(fast);
  } while(slow != fast);
  if (slow == 1) return true;
  else return 0;
  
};
let digitSquareSum = (n)=> {
  let sum = 0, tmp;
  while (n) {
      tmp = n % 10;
      sum += tmp * tmp;
      n = ~~(n/10);
  }
  return sum;
}
console.log(isHappy(33));