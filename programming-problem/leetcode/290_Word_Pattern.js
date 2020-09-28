// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false
var wordPattern = function(pattern, s) {
  let stringArray = s.split(" ");
  if(pattern.length !== stringArray.length){
      return false;
  }
  const inner = (val)=>{
      let obj = {};
      for(let i =0;i<val.length;i++){
          if(!obj[val[i]]) obj[val[i]] = i;
          else obj[val[i]] += i;
      }
      return obj;
  }
  return Object.values(inner(pattern)).join("") === Object.values(inner(stringArray)).join("");
};

var wordPattern = function(pattern, s) {
  let stringArray = s.split(" ");
  if(pattern.length !== stringArray.length){
      return false;
  }
  let map = new Map();
  let set = new Set();
  for(let i = 0;i<pattern.length;i++){
      if(!map.has(pattern[i])){
          if(set.has(stringArray[i])){
              return false;
          }
          
          map.set(pattern[i],stringArray[i]);
          set.add(stringArray[i]);
      }else{
          if(stringArray[i] !== map.get(pattern[i])){
              return false;
          }
      }
  }
  return true;
  

};