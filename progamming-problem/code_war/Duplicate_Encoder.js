const duplicateEncode = (word) => {
  let string = "";
  let obj = {};
  let word1 = word.toUpperCase();
  for (const character of word1) {
    if (!obj[character]) {
      obj[character] = 1;
    } else {
      obj[character]++;
    }

  }
  console.log(obj);

  for (const character of word1) {
    if (obj[character] === 1) {
      string += "(";
    } else {
      string += ")";
    }

  }
  return string;
};
console.log(duplicateEncode("(( @"));