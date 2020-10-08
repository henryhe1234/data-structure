// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length -1;
  let regex = /[a-z0-9]/i
  while(i <= j){
      if(!regex.test(s[i])){
          i++;
      }else if(!regex.test(s[j])){
          j--
      }else{
          if(s[i++].toLowerCase() !== s[j--].toLowerCase()){
              return false;
          }
      }
  }
  return true;
  
};