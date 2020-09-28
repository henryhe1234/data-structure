// 204. Count Primes
// Count the number of prime numbers less than a non-negative number, n.

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
var countPrimes = function(n) {
  if(n === 0 || n === 1){
      return 0;
  }
  let count = 0;
  let notPrime = new Array(n).fill(false);
  for(let i = 2;i<n;i++){
      if(!notPrime[i]){
          count++
          for(let j =2;i*j<n;j++){
              notPrime[i*j]=true;
          }
      }
  }
  return count;
};