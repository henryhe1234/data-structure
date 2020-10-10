// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
  if(s === null || s.length === 0) return s;
  
  let vowels = "aeiouAEIOU";
  let arr = s.split("");
  let start = 0;
  let end = arr.length -1;
  
  while(start < end){
      while(start < end && !vowels.includes(arr[start])){
          start++;
      }
      while(start < end && !vowels.includes(arr[end])){
          end--;
      }
      
      let temp = arr[start];
      
      arr[start] = arr[end];
      arr[end] = temp;
      
      start++;
      end--;
  }
  return arr.join("");
};