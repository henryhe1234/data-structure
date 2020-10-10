// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let x = 0;
  for(let i = 0;i<s.length;i++){
      if(s[i] === 'I'){
          x += 1;
      }else if(s[i] === "V"){
          if(s[i-1] === "I"){
              x += 3
          }else{
              x += 5;
          }
          
      }else if(s[i] === "X"){
          if(s[i-1] === "I"){
              x += 8
          }else{
             x += 10; 
          }
          
      }else if(s[i] === "L"){
          if(s[i-1] === "X"){
              x += 30;
          }else{
               x += 50;
          }
         
      }else if (s[i] === "C"){
          if(s[i-1] === "X"){
              x += 80;
          }else{
              x += 100;
          }
          
      }else if (s[i] === "D"){
          if(s[i-1] === "C"){
              x += 300;
          }else{
            x += 500;  
          }
          
      }else if (s[i] === "M"){
          if(s[i-1] === "C"){
              x += 800
          }else{
              x += 1000;
          }
          
      }
  }
  return x;
};