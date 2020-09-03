let Queue = require('./queue');
const game = (nameArray,targetNumber) =>{
  let queue = new Queue();
  for(const name of nameArray){
    queue.enqueue(name);
  }
  while(!queue.size === 1){
    for(let i = 1;i<targetNumber;i++){
      let tempName = queue.front();
      queue.dequeue();
      queue.enqueue(tempName);
      
    }
    queue.dequeue();
  }
  return queue.front();
};
let array = ["1","2","3","4","5","6"];
console.log(game(array,5));