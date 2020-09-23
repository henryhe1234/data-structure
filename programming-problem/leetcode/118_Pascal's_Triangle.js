// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
var generate = function(numRows) {
  let answer = [];
  for(let i =0;i<numRows;i++){
      let temp = [];
      if(i === 0){
          temp.push(1);
      }else if(i === 1){
          temp.push(1,1);
      }else{
          temp.push(1);
          for(let j =1;j<i;j++){
              temp[j] = answer[i-1][j-1]+  answer[i-1][j];
          }
          temp.push(1)
      }
      answer.push(temp);
  }
  return answer;
};