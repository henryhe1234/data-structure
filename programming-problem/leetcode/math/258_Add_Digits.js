// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.


// For base b (decimal case b = 10), the digit root of an integer is:

// dr(n) = 0 if n == 0
// dr(n) = (b-1) if n != 0 and n % (b-1) == 0
// dr(n) = n mod (b-1) if n % (b-1) != 0
// or

dr(n) = 1 + (n - 1) % 9
var addDigits = function(num) {
  return 1+(num-1)%9
};

