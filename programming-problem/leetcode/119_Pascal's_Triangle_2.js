// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.
// Input: rowIndex = 3
// Output: [1,3,3,1]

var getRow = function(rowIndex) {
  let array = new Array(rowIndex+1).fill(0);
  array[0] = 1
  for(let i =0;i<=rowIndex;i++){
      for(let j = i;j>=1;j--){
          array[j] += array[j-1];
      }
  }
  return array;

  
};