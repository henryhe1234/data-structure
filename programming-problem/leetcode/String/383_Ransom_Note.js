// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
var canConstruct = function(ransomNote, magazine) {
  let arr = new Array(26).fill(0);
  
  for(let i = 0;i<magazine.length;i++){
      arr[magazine.charCodeAt(i) -  97]++;
      // console.log(arr);
  }
  
  for(let i = 0;i<ransomNote.length;i++){
      arr[ransomNote.charCodeAt(i) - 97]--;
    
      if(arr[ransomNote.charCodeAt(i)-97] <0){
          return false;
      }
          
  }
  return true;
};
var canConstruct = function(ransomNote, magazine) {
  let magazineArr = magazine.split("");
  for(let i = 0;i<ransomNote.length;i++){
      let m = magazineArr.indexOf(ransomNote[i]);
      if(m === -1) return false;
      magazineArr[m] = 0;
  }
  return true;
};

