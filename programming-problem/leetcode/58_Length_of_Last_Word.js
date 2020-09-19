var lengthOfLastWord = function(s) {
  let string = s.trim();
  let array = string.split(" ");
  console.log(array);
  
  return array[array.length-1].length;
  
};
console.log(lengthOfLastWord("a "));