// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

var longestPalindrome = function(s) {
  let map = {};
  let output = 0;
  if(s.length ===1){
      return s.length;
  }
  for(let c of s){
      map[c] === undefined ? map[c] = 1 : map[c]++;
      
  }
  for(let key in map){
      if(map[key] >= 2){
          if(map[key] %2 === 0){
              output += map[key];
              
          }else{
              output += map[key]-1;
              map[key] -= map[key]-1;
          }
      }
          
      
  }
  if(Object.values(map).includes(1)){
      output++;
  }
  return output;
};