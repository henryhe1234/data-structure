let Stack = require('./stack');
const decimalToBinary = (decimal)=>{
  let stack = new Stack();
  let string = "";
  while(Math.floor(decimal) > 0){
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  while(!stack.isEmpty( )){
    string += stack.pop()
  }
  return string;
}
console.log(decimalToBinary(100));