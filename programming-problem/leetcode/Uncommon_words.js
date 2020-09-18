const uncommonFromSentenses = (A, B) => {
  let array = [];
  let arrayA = A.split(" ");
  let arrayB = B.split(" ");
  let obj = {};

  for(const word of arrayA){
    if(!obj[word]){
      obj[word] = 1;
    }else{
      obj[word]++;
    }

  }
  for(const word of arrayB){
    if(obj[word]){
      obj[word]++;
    }else{
      obj[word] = 1;
    }
  }
  for(const key in obj){
    if(obj[key] === 1){
      array.push(key);
    }
  }


  return array;
}
let A = "this apple is sweet";
let B = "this apple is sour";
console.log(uncommonFromSentenses(A,B));