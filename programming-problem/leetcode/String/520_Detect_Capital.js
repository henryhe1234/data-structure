// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 

// Example 1:

// Input: "USA"
// Output: True
 

// Example 2:

// Input: "FlaG"
// Output: False
var detectCapitalUse = function(word) {
  if(word.length === 1) return true;
  let CapRest = true;
  if(word.charCodeAt(0) >= 97){
      for(let i = 1;i<word.length;i++){
          if(word.charCodeAt(i) <= 90)
              return false;
      }
  }else{
      if(word.charCodeAt(1) >= 97){
          for(let i = 2;i<word.length;i++){
              if(word.charCodeAt(i) <= 90)
                  return false;
          }
      }else{
          for(let i=2;i<word.length;i++){
              if(word.charCodeAt(i) > 90)
                  return false;
          }
      }
  }
  
  return true;
};
var detectCapitalUse = function(word) {
  if(word.toUpperCase() === word) return true;
  if(word.toLowerCase() === word) return true;
  if(word.slice(1).toLowerCase() === word.slice(1)) return true;
  return false;
};

