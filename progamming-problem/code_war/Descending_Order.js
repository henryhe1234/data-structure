function descendingOrder(n){
  //...
  let numString = n.toString();
  console.log(numString);
  let numArray = numString.split("")
  console.log(numArray);
  
  let newArray = numArray.sort((a,b)=>b-a);
  console.log(newArray);
  let newString = newArray.join("");
  console.log(newString);
  
  return parseInt(newString);
}
console.log(descendingOrder(123456789));