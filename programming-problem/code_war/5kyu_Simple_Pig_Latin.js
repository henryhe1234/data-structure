const pigIt = (str) => {
  let array = str.split(" ");
  let newArray = [];

  for (let j = 0; j < array.length; j++) {
    let newWord = ""
    for (let i = 1; i < array[j].length; i++) {
      newWord += array[j][i];
    }
    newWord += array[j][0];
    if(/^[a-zA-Z]/.test(array[j])){
      newWord += "ay";
    }
    newArray.push(newWord);
  }
//   newArray.push(array[array.length-1]);
  let finalString = newArray.join(" ");
  return finalString;
}
pigIt("Hello world !");