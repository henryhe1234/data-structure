const digital_root = (n) => {
  let answer = 0;
  let stringNum = n.toString();

  for (let num of stringNum) {

    answer += Number(num);

  }

  if (answer > 9) {
    return digital_root(answer);
  } else {
    return answer;
  }
}
console.log(digital_root(456));