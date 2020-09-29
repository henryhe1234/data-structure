
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

 

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

var commonChars = function(A) {
  let res = [...A[0]];
  
  for(let i = 1;i<A.length;i++){
      res = res.filter(c =>{
          let length = A[i].length;
          A[i] = A[i].replace(c,"");
          return length > A[i].length;
      })
  }
  return res;
};
