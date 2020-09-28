// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

var findWords = function(words) {
  const row1 = `qwertyuiop`;
  const row2 = `asdfghjkl`;
  const row3 = `zxcvbnm`;
  
  let map = {};
  let answer = [];
  for(const letter of row1) map[letter] = 1;
  for(const letter of row2) map[letter] = 2;
  for(const letter of row3) map[letter] = 3;
  
  for(let i = 0;i<words.length;i++){
      let word = words[i].toLowerCase();
      let row = map[word[0]];
      let sameRow = true;
      for(let letter of word){
          if(map[letter] !== row) sameRow =  false;
      }
      if(sameRow){
          answer.push(words[i]);
      } 
  }
  return answer;
};



var findWords = function(words) {
  return words.filter((w) => {
      // remove word from array if it fails matching all three rows
      if (
          !/^[qwertyuiop]*$/i.test(w) &&
          !/^[asdfghjkl]*$/i.test(w) &&
          !/^[zxcvbnm]*$/i.test(w)
      ) return false;
      
      return true;
  });
};