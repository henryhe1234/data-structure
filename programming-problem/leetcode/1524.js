var numOfSubarrays = function (arr) {
  const n = arr.length;
  let mod = 1e9 + 7;
  let answer = 0;
  let odd = 0, even = 0;
  for (const ele of arr) {
    if (ele & 1) {
      let temp = even;
      even = odd;
      odd = temp + 1
    } else {
      
      
      even = even + 1;
      
    }
    answer += odd;
  }

  return answer % mod;
};
console.log(numOfSubarrays([1,2,3,4,5,6,7]));