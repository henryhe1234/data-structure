// You are given a string s, return the number of segments in the string. 

// A segment is defined to be a contiguous sequence of non-space characters.

 

// Example 1:

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:

// Input: s = "Hello"
// Output: 1
// Example 3:

// Input: s = "love live! mu'sic forever"
// Output: 4
// Example 4:

// Input: s = ""
// Output: 0

var countSegments = function(s) {
  s = s.trim();
  if(s.length === 0) return 0;
  // s = s.replace(/\s/g, "");
  let count = 0;
  let arr = s.split(" ");
  for(let c of arr){
      if(c !== ""){
          count++;
      }
  }
  return count;
};

var countSegments = function(s) {
  　let count = 0;
    for(let i = 0;i<s.length;i++){
        if(s[i] !== " " && (i === 0 || s[i-1] === " ")){
            count++;
        }
    }
    return count;
};
