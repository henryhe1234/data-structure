function solution(str){
  let answer = [];
   for(let i = 0;i<str.length;i += 2){
     
     let subString = str.substr(i,2);
     if(i >= str.length-1){
       console.log(subString);
       subString += '_';
     }
//      console.log(subString);
     console.log
     answer.push(subString);
     
   }
  return answer;
}