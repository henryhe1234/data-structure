function findUniq(arr) {
  // do magic
  let map = new Map();
  for(let num of arr){
    
    map.set(num,(map.get(num) || 0) +1 );
  }
  for(let [k,v] of map){
    if(map.get(k) === 1){
      return k;
    }
      
  }
};
console.log(findUniq([ 3, 10, 3, 3, 3 ]));