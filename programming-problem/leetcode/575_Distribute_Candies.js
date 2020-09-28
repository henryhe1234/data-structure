// You have n candies, the ith candy is of type candies[i].

// You want to distribute the candies equally between a sister and a brother so that each of them gets n / 2 candies (n is even). The sister loves to collect different types of candies, so you want to give her the maximum number of different types of candies.

// Return the maximum number of different types of candies you can give to the sister.

var distributeCandies = function(candies) {
  if(candies.length === 2){
      return 1;
  }
  
  let set = new Set();
  let max = candies.length / 2;
  let output = 0;
  for(let i = 0;i<candies.length;i++){
      if(!set.has(candies[i]) && output < max){
          set.add(candies[i]);
          output++;
      }
  }
  return output;
};